import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "クイズミリオネア",
  description: "全15問の4択クイズに挑戦！全問正解で賞金1000万円を目指そう！",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
