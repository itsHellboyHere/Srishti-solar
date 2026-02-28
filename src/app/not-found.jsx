import Link from "next/link";
import { MoveLeft, Phone, Zap, ShieldCheck, Leaf } from "lucide-react";
import styles from "@/css/not-found.module.css";

const HELP_POINTS = [
  { icon: <Zap size={14} />, text: "Net-metering support" },
  { icon: <ShieldCheck size={14} />, text: "Bihar focused team" },
  { icon: <Leaf size={14} />, text: "Fast site-visits" },
];

export default function NotFound() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Floating 3D Solar Element */}
        <div className={styles.visualArea}>
          <div className={styles.floatingPanel}>
            
            {/* Solar Grid Pattern */}
            <div className={styles.panelGrid}>
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>

            <div className={styles.errorText}>404</div>
          </div>

          {/* Background Glow */}
          <div className={styles.sunGlow} />
        </div>

        <div className={styles.content}>
          <span className={styles.kicker}>Energy Misplaced</span>

          <h1 className={styles.title}>
            सूरज मिल गया, <br />
            <span>पेज नहीं मिला।</span>
          </h1>

          <p className={styles.desc}>
            The surface you are looking for is yet to be defined.
            Let's get your journey back towards a brighter, sustainable future.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryBtn}>
              <MoveLeft size={18} /> Back to Home
            </Link>

            <a href="tel:+919931013345" className={styles.secondaryBtn}>
              <Phone size={18} /> 99310 13345
            </a>
          </div>

          <div className={styles.verseLinks}>
            <p>Why choose Srishti Solar:</p>

            <div className={styles.linkGrid}>
              {HELP_POINTS.map((item, index) => (
                <div key={index} className={styles.pointItem}>
                  {item.icon} <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}