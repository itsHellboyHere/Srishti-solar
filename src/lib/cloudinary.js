// src/lib/cloudinary.js
// Cloudinary URL helpers — original URL se optimised phone-friendly URLs banata hai.

const isCloudinary = (url) => typeof url === 'string' && url.includes('res.cloudinary.com')

// "/upload/" ke baad agar pehle se transformation hai (v123 se start nahi hota) to dobara mat lagao
const hasTransform = (url) => /\/upload\/(?!v\d+\/)/.test(url)

const inject = (url, transform) => url.replace('/upload/', `/upload/${transform}/`)

const swapExt = (url, ext) => url.replace(/\.[a-zA-Z0-9]+$/, `.${ext}`)

/** Image: auto format (webp/avif) + auto quality + max width */
export function cldImage(url, width = 600) {
  if (!isCloudinary(url) || hasTransform(url)) return url
  return inject(url, `f_auto,q_auto,w_${width},c_limit`)
}

/** Video MP4 (H.264) — har phone pe chalta hai. Audio hata di (muted hi chalega, data bachega) */
export function cldVideoMp4(url, width = 480) {
  if (!isCloudinary(url)) return url
  const base = hasTransform(url) ? url : inject(url, `q_auto:eco,w_${width},c_limit,vc_h264,ac_none`)
  return swapExt(base, 'mp4')
}

/** Video WebM (VP9) — chhoti file size, modern browsers me */
export function cldVideoWebm(url, width = 480) {
  if (!isCloudinary(url)) return url
  const base = hasTransform(url) ? url : inject(url, `q_auto:eco,w_${width},c_limit,vc_vp9,ac_none`)
  return swapExt(base, 'webm')
}

/** Video ka poster — pehla frame JPG ki tarah (video load hone se pehle yahi dikhega) */
export function cldPoster(url, width = 480) {
  if (!isCloudinary(url)) return url
  return swapExt(inject(url, `so_0,f_jpg,q_auto,w_${width},c_limit`), 'jpg')
}
/** Lightbox ke liye: bada MP4, audio ke saath (user khud play/pause/sound control karega) */
export function cldVideoFull(url, width = 960) {
  if (!isCloudinary(url)) return url
  const base = hasTransform(url) ? url : inject(url, `q_auto,w_${width},c_limit,vc_h264`)
  return swapExt(base, 'mp4')
}