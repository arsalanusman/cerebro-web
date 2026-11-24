import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || SITE.name;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 600,
                color: "#000000",
                letterSpacing: "-0.02em",
              }}
            >
              cerebro
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#0070C2",
                backgroundColor: "#E8F2FC",
                padding: "4px 10px",
                borderRadius: "6px",
              }}
            >
              DNano
            </span>
          </div>
          <span style={{ fontSize: "16px", color: "#5A6675" }}>
            cerebro.media
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              width: "48px",
              height: "4px",
              backgroundColor: "#0070C2",
              borderRadius: "2px",
            }}
          />
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E2E8F0",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#5A6675" }}>
            Marketing data integration, analytics and reporting platform
          </span>
          <span style={{ fontSize: "16px", color: "#000000", fontWeight: 500 }}>
            Meta Ads · Google Ads · TikTok Ads
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
