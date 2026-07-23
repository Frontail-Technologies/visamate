import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Visa Mate | USA Tourist & Business Visa Made Simple";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 25% 20%, #0F5C96 0%, #071827 45%), radial-gradient(circle at 80% 85%, #711731 0%, #071827 55%)",
          padding: "80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={340} height={116} alt="" />
        <div
          style={{
            marginTop: 48,
            fontSize: 52,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 880,
          }}
        >
          USA Tourist & Business Visa Made Simple
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
          }}
        >
          100% Transparent Pricing – What You See Is What You Pay
        </div>
      </div>
    ),
    { ...size },
  );
}
