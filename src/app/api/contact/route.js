// ═══════════════════════════════════════════════
//  /api/contact — Lead capture route
//  Active:   Telegram Bot notification
//  Active:   WhatsApp redirect URL builder
//  Commented: Resend email (uncomment when ready)
// ═══════════════════════════════════════════════

// import { Resend } from 'resend'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, phone, city, kw, message } = body

    // ── Validation ──────────────────────────────
    if (!name || !phone || !city || !kw) {
      return Response.json(
        { success: false, error: 'सभी ज़रूरी फ़ील्ड भरें' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day:    '2-digit',
      month:  'short',
      year:   'numeric',
      hour:   '2-digit',
      minute: '2-digit',
    })

    // ── Subsidy estimate based on kW ────────────
    const subsidyMap = { '1': '₹30,000', '2': '₹60,000', '3': '₹78,000' }
    const subsidy = subsidyMap[kw] || 'Up to ₹78,000'

    // ════════════════════════════════════════════
    //  1. TELEGRAM NOTIFICATION
    // ════════════════════════════════════════════
    const telegramText = [
      `🌞 <b>New Solar Lead!</b>`,
      ``,
      `👤 <b>Name:</b> ${name}`,
      `📱 <b>Phone:</b> ${phone}`,
      `📍 <b>City:</b> ${city}`,
      `⚡ <b>Interest:</b> ${kw} kW System`,
      `💰 <b>Subsidy:</b> ${subsidy}`,
      message ? `💬 <b>Message:</b> ${message}` : null,
      ``,
      `🕐 <b>Time:</b> ${timestamp}`,
      ``,
      `📞 <i>Call back: ${phone}</i>`,
    ]
      .filter(Boolean)
      .join('\n')

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id:    process.env.TELEGRAM_CHAT_ID,
          text:       telegramText,
          parse_mode: 'HTML',
        }),
      }
    )

    if (!telegramRes.ok) {
      const err = await telegramRes.json()
      console.error('Telegram error:', err)
      // Don't fail the whole request — still redirect user
    }

    // ════════════════════════════════════════════
    //  2. RESEND EMAIL — uncomment when ready
    // ════════════════════════════════════════════
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Email to YOU (lead notification)
    await resend.emails.send({
      from:    'Srishti Solar Leads <noreply@srishtisolarpower.com>',
      to:      ['info@srishtisolarpower.com'],
      subject: `🌞 New Lead: ${name} — ${kw}kW — ${city}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#F4A300">🌞 New Solar Lead</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666">Name</td><td style="font-weight:700">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Phone</td><td style="font-weight:700">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#666">City</td><td style="font-weight:700">${city}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Interest</td><td style="font-weight:700">${kw} kW</td></tr>
            <tr><td style="padding:8px 0;color:#666">Subsidy</td><td style="font-weight:700">${subsidy}</td></tr>
            ${message ? `<tr><td style="padding:8px 0;color:#666">Message</td><td>${message}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#666">Time</td><td>${timestamp}</td></tr>
          </table>
          <a href="https://wa.me/919931013345" style="display:inline-block;margin-top:24px;background:#25D366;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700">
            Reply on WhatsApp
          </a>
        </div>
      `,
    })

    // Email to USER (confirmation)
    // Only send if user provided email — add email field to form first
    // await resend.emails.send({
    //   from:    'Srishti Solar Power <info@srishtisolarpower.com>',
    //   to:      [userEmail],
    //   subject: 'आपका अनुरोध मिल गया — Srishti Solar Power',
    //   html: `...confirmation template...`,
    // })
    */

    // ════════════════════════════════════════════
    //  3. BUILD WHATSAPP REDIRECT URL
    // ════════════════════════════════════════════
    const waMessage = encodeURIComponent(
      `नमस्ते! मैं ${name} बोल रहा हूँ ${city} से।\n\n` +
      `मुझे ${kw} kW सोलर सिस्टम में रुचि है।\n` +
      `सरकारी सब्सिडी ${subsidy} के बारे में जानकारी चाहिए।\n\n` +
      `कृपया मुझसे संपर्क करें: ${phone}`
    )
    // 919931013345
    const waUrl = `https://wa.me/917004671676?text=${waMessage}`

    return Response.json({
      success: true,
      waUrl,
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return Response.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}