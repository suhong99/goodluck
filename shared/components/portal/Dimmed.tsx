import style from './portal.module.css';

export default function Dimmed({ children }: { children: React.ReactNode }) {
  return <div className={style.dimmed}>{children}</div>;
}
