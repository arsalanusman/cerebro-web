import svgPaths from "./svg-s34qo6xtfw";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[14px] text-white uppercase w-full">Data Sources</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#64748b] text-[11px] w-full">{`Social & Digital Platforms`}</p>
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="linkedin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_36_450)" id="linkedin">
          <g id="Vector">
            <path d={svgPaths.p7367e00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p229ae080} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p3427f000} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_36_450">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Linkedin />
    </div>
  );
}

function PlatformLogo() {
  return (
    <div className="bg-[#0077b5] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[28px]" data-name="platform-logo">
      <IconWrapper />
    </div>
  );
}

function SourceItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="source-item">
      <PlatformLogo />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">LinkedIn</p>
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="facebook">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="facebook">
          <path d={svgPaths.p28961080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Facebook />
    </div>
  );
}

function PlatformLogo1() {
  return (
    <div className="bg-[#1877f2] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[28px]" data-name="platform-logo">
      <IconWrapper1 />
    </div>
  );
}

function SourceItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="source-item">
      <PlatformLogo1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">Facebook</p>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="instagram">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_36_459)" id="instagram">
          <path d={svgPaths.p3083e2f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_36_459">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Instagram />
    </div>
  );
}

function PlatformLogo2() {
  return (
    <div className="bg-[#e1306c] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[28px]" data-name="platform-logo">
      <IconWrapper2 />
    </div>
  );
}

function SourceItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="source-item">
      <PlatformLogo2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">Instagram</p>
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="twitter">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_36_453)" id="twitter">
          <path d={svgPaths.p23182c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_36_453">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Twitter />
    </div>
  );
}

function PlatformLogo3() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[28px]" data-name="platform-logo">
      <IconWrapper3 />
    </div>
  );
}

function SourceItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="source-item">
      <PlatformLogo3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">X (Twitter)</p>
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="youtube">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="youtube">
          <path d={svgPaths.p2aafe400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Youtube />
    </div>
  );
}

function PlatformLogo4() {
  return (
    <div className="bg-[red] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[28px]" data-name="platform-logo">
      <IconWrapper4 />
    </div>
  );
}

function SourceItem4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="source-item">
      <PlatformLogo4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">YouTube</p>
    </div>
  );
}

function Globe() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="globe">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_36_468)" id="globe">
          <path d={svgPaths.p33a0abc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_36_468">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Globe />
    </div>
  );
}

function PlatformLogo5() {
  return (
    <div className="bg-[#3f3d56] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[28px]" data-name="platform-logo">
      <IconWrapper5 />
    </div>
  );
}

function SourceItem5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="source-item">
      <PlatformLogo5 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">Websites / Blogs</p>
    </div>
  );
}

function Code() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="code">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_36_462)" id="code">
          <path d={svgPaths.p10cb9e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_36_462">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Code />
    </div>
  );
}

function PlatformLogo6() {
  return (
    <div className="bg-[#7c3aed] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[28px]" data-name="platform-logo">
      <IconWrapper6 />
    </div>
  );
}

function SourceItem6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="source-item">
      <PlatformLogo6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">{`APIs & News`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <SourceItem />
      <SourceItem1 />
      <SourceItem2 />
      <SourceItem3 />
      <SourceItem4 />
      <SourceItem5 />
      <SourceItem6 />
    </div>
  );
}

function DataSourcesPanel() {
  return (
    <div className="bg-[#0c0e1e] content-stretch flex flex-col gap-[20px] items-start p-[24px] relative rounded-[20px] shrink-0 w-[240px]" data-name="data-sources-panel">
      <div aria-hidden className="absolute border border-[#1e2238] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
            <line id="Line" stroke="var(--stroke-0, #1E2238)" x2="192" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function FlowLinesLeft() {
  return (
    <div className="h-[300px] relative shrink-0 w-[100px]" data-name="flow-lines-left">
      <div className="absolute inset-[0_0_0_-0.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.75 300">
          <g id="flow-lines-left">
            <line id="Line" stroke="url(#paint0_linear_36_400)" strokeWidth="1.5" x1="1.125" x2="89.4596" y1="29.3505" y2="80.3505" />
            <line id="Line_2" stroke="url(#paint1_linear_36_400)" strokeWidth="1.5" x1="0.944114" x2="98.5026" y1="79.2756" y2="105.416" />
            <line id="Line_3" stroke="url(#paint2_linear_36_400)" strokeWidth="1.5" x1="0.75" x2="100.75" y1="129.25" y2="129.25" />
            <line id="Line_4" stroke="url(#paint3_linear_36_400)" strokeWidth="1.5" x1="0.555886" x2="98.1144" y1="179.276" y2="153.135" />
            <line id="Line_5" stroke="url(#paint4_linear_36_400)" strokeWidth="1.5" x1="0.375" x2="88.7096" y1="229.35" y2="178.35" />
            <foreignObject height="12" width="12" x="76.75" y="76">
              <div style={{ backdropFilter: "blur(2px)", clipPath: "url(#bgblur_0_36_400_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <circle cx="82.75" cy="82" fill="var(--fill-0, #A855F7)" id="Ellipse" r="2" data-figma-bg-blur-radius="4" />
            <circle cx="48.25" cy="117.5" fill="var(--fill-0, #A855F7)" id="Ellipse_2" r="2.5" />
            <circle cx="62.75" cy="172" fill="var(--fill-0, #A855F7)" id="Ellipse_3" r="2" />
          </g>
          <defs>
            <clipPath id="bgblur_0_36_400_clip_path" transform="translate(-76.75 -76)">
              <circle cx="82.75" cy="82" r="2" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_36_400" x1="0.75" x2="89.0846" y1="30" y2="81">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_36_400" x1="0.75" x2="98.3085" y1="80" y2="106.141">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_36_400" x1="0.75" x2="100.75" y1="130" y2="130">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_36_400" x1="0.75" x2="98.3085" y1="180" y2="153.859">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_36_400" x1="0.75" x2="89.0846" y1="230" y2="179">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CloudDownload() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="cloud-download">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="cloud-download">
          <path d={svgPaths.p2fe70e00} id="Vector" stroke="var(--stroke-0, #A855F7)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <CloudDownload />
    </div>
  );
}

function GlowIconWrap() {
  return (
    <div className="bg-[rgba(168,85,247,0.06)] content-stretch flex items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="glow-icon-wrap">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.13)] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <IconWrapper7 />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="card-header">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#a855f7] text-[14px] text-center w-[min-content]">EXTRACT</p>
      <GlowIconWrap />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #A855F7)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">AI Web Crawlers</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #A855F7)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">API Connectors</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #A855F7)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Real-time Data</p>
    </div>
  );
}

function BulletStack() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="bullet-stack">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function CoreCardExtract() {
  return (
    <div className="bg-[#0c0e1e] content-stretch drop-shadow-[0px_8px_12px_rgba(168,85,247,0.08)] flex flex-col gap-[20px] h-[250px] items-start px-[20px] py-[24px] relative rounded-[16px] shrink-0 w-[160px]" data-name="core-card-extract">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader />
      <BulletStack />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right">
          <path d={svgPaths.p2df9a900} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <ArrowRight />
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="settings">
          <path d={svgPaths.pc965540} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <Settings />
    </div>
  );
}

function GlowIconWrap1() {
  return (
    <div className="bg-[rgba(59,130,246,0.06)] content-stretch flex items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="glow-icon-wrap">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.13)] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <IconWrapper9 />
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="card-header">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#3b82f6] text-[14px] text-center w-[min-content]">TRANSFORM</p>
      <GlowIconWrap1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">LLM Parsing</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Data Cleaning</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Enrichment</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Deduplication</p>
    </div>
  );
}

function BulletStack1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="bullet-stack">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function CoreCardTransform() {
  return (
    <div className="bg-[#0c0e1e] content-stretch drop-shadow-[0px_8px_12px_rgba(59,130,246,0.08)] flex flex-col gap-[20px] h-[250px] items-start px-[20px] py-[24px] relative rounded-[16px] shrink-0 w-[160px]" data-name="core-card-transform">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader1 />
      <BulletStack1 />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right">
          <path d={svgPaths.p2df9a900} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <ArrowRight1 />
    </div>
  );
}

function Database() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="database">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="database">
          <path d={svgPaths.p1e928400} id="Vector" stroke="var(--stroke-0, #06B6D4)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <Database />
    </div>
  );
}

function GlowIconWrap2() {
  return (
    <div className="bg-[rgba(6,182,212,0.06)] content-stretch flex items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="glow-icon-wrap">
      <div aria-hidden className="absolute border border-[rgba(6,182,212,0.13)] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <IconWrapper11 />
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="card-header">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#06b6d4] text-[14px] text-center w-[min-content]">LOAD</p>
      <GlowIconWrap2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #06B6D4)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Data Warehouse</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #06B6D4)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Data Lake</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #06B6D4)" id="Ellipse" r="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Vector DB</p>
    </div>
  );
}

function BulletStack2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="bullet-stack">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function CoreCardLoad() {
  return (
    <div className="bg-[#0c0e1e] content-stretch drop-shadow-[0px_8px_12px_rgba(6,182,212,0.08)] flex flex-col gap-[20px] h-[250px] items-start px-[20px] py-[24px] relative rounded-[16px] shrink-0 w-[160px]" data-name="core-card-load">
      <div aria-hidden className="absolute border border-[rgba(6,182,212,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader2 />
      <BulletStack2 />
    </div>
  );
}

function CoreCardsRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="core-cards-row">
      <CoreCardExtract />
      <IconWrapper8 />
      <CoreCardTransform />
      <IconWrapper10 />
      <CoreCardLoad />
    </div>
  );
}

function Sparkles() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="sparkles">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_36_427)" id="sparkles">
          <path d={svgPaths.p39ddd080} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_36_427">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Sparkles />
    </div>
  );
}

function AiProcessingPill() {
  return (
    <div className="bg-[#0c0e1e] content-stretch drop-shadow-[0px_4px_8px_rgba(59,130,246,0.13)] flex gap-[8px] items-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="ai-processing-pill">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.33)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <IconWrapper12 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">{`AI Processing & Intelligence`}</p>
    </div>
  );
}

function EtlCenterCore() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative" data-name="etl-center-core">
      <CoreCardsRow />
      <AiProcessingPill />
    </div>
  );
}

function FlowLinesRight() {
  return (
    <div className="h-[300px] relative shrink-0 w-[100px]" data-name="flow-lines-right">
      <div className="absolute inset-[0_0_0_-0.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.75 300">
          <g id="flow-lines-right">
            <line id="Line" stroke="url(#paint0_linear_36_414)" strokeWidth="1.5" x1="0.375" x2="88.7096" y1="79.3505" y2="28.3505" />
            <line id="Line_2" stroke="url(#paint1_linear_36_414)" strokeWidth="1.5" x1="0.555886" x2="98.1144" y1="114.276" y2="88.1348" />
            <line id="Line_3" stroke="url(#paint2_linear_36_414)" strokeWidth="1.5" x1="0.75" x2="100.75" y1="149.25" y2="149.25" />
            <line id="Line_4" stroke="url(#paint3_linear_36_414)" strokeWidth="1.5" x1="0.944114" x2="98.5026" y1="184.276" y2="210.416" />
            <line id="Line_5" stroke="url(#paint4_linear_36_414)" strokeWidth="1.5" x1="1.125" x2="89.4596" y1="219.35" y2="270.35" />
            <circle cx="17.75" cy="117" fill="var(--fill-0, #06B6D4)" id="Ellipse" r="2" />
            <circle cx="53.25" cy="82.5" fill="var(--fill-0, #06B6D4)" id="Ellipse_2" r="2.5" />
            <circle cx="47.75" cy="187" fill="var(--fill-0, #06B6D4)" id="Ellipse_3" r="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_36_414" x1="0.75" x2="89.0846" y1="80" y2="29">
              <stop stopColor="#06B6D4" stopOpacity="0" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_36_414" x1="0.75" x2="98.3085" y1="115" y2="88.8593">
              <stop stopColor="#06B6D4" stopOpacity="0" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_36_414" x1="0.75" x2="100.75" y1="150" y2="150">
              <stop stopColor="#06B6D4" stopOpacity="0" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_36_414" x1="0.75" x2="98.3085" y1="185" y2="211.141">
              <stop stopColor="#06B6D4" stopOpacity="0" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_36_414" x1="0.75" x2="89.0846" y1="220" y2="271">
              <stop stopColor="#06B6D4" stopOpacity="0" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[14px] text-white uppercase w-full">Unified Intelligence</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#64748b] text-[11px] w-full">Insights That Drive Growth</p>
    </div>
  );
}

function BarChart() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="bar-chart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="bar-chart">
          <path d={svgPaths.p2e4dae80} id="Vector" stroke="var(--stroke-0, #A855F7)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <BarChart />
    </div>
  );
}

function IntelIcon() {
  return (
    <div className="bg-[rgba(168,85,247,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="intel-icon">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconWrapper13 />
    </div>
  );
}

function IntelligenceItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="intelligence-item">
      <IntelIcon />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">Analytics Dashboard</p>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_36_456)" id="users">
          <path d={svgPaths.p2277bd00} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_36_456">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Users />
    </div>
  );
}

function IntelIcon1() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="intel-icon">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconWrapper14 />
    </div>
  );
}

function IntelligenceItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="intelligence-item">
      <IntelIcon1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">{`CRM & Lead Insights`}</p>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_36_386)" id="search">
          <path d={svgPaths.pb810ec0} id="Vector" stroke="var(--stroke-0, #06B6D4)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_36_386">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Search />
    </div>
  );
}

function IntelIcon2() {
  return (
    <div className="bg-[rgba(6,182,212,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="intel-icon">
      <div aria-hidden className="absolute border border-[rgba(6,182,212,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconWrapper15 />
    </div>
  );
}

function IntelligenceItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="intelligence-item">
      <IntelIcon2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">Smart Search</p>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_36_442)" id="bell">
          <path d={svgPaths.p11098900} id="Vector" stroke="var(--stroke-0, #A855F7)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_36_442">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Bell />
    </div>
  );
}

function IntelIcon3() {
  return (
    <div className="bg-[rgba(168,85,247,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="intel-icon">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconWrapper16 />
    </div>
  );
}

function IntelligenceItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="intelligence-item">
      <IntelIcon3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">{`Reports & Alerts`}</p>
    </div>
  );
}

function Cpu() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="cpu">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_36_383)" id="cpu">
          <path d={svgPaths.p188e8800} id="Vector" stroke="var(--stroke-0, #06B6D4)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_36_383">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Cpu />
    </div>
  );
}

function IntelIcon4() {
  return (
    <div className="bg-[rgba(6,182,212,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="intel-icon">
      <div aria-hidden className="absolute border border-[rgba(6,182,212,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconWrapper17 />
    </div>
  );
}

function IntelligenceItem4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="intelligence-item">
      <IntelIcon4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[13px] text-white">AI Assistant</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <IntelligenceItem />
      <IntelligenceItem1 />
      <IntelligenceItem2 />
      <IntelligenceItem3 />
      <IntelligenceItem4 />
    </div>
  );
}

function UnifiedIntelligencePanel() {
  return (
    <div className="bg-[#0c0e1e] content-stretch flex flex-col gap-[20px] items-start p-[24px] relative rounded-[20px] shrink-0 w-[240px]" data-name="unified-intelligence-panel">
      <div aria-hidden className="absolute border border-[#1e2238] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame12 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
            <line id="Line" stroke="var(--stroke-0, #1E2238)" x2="192" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame13 />
    </div>
  );
}

function FlowSection() {
  return (
    <div className="content-stretch flex h-[440px] items-center justify-between relative shrink-0 w-full" data-name="flow-section">
      <DataSourcesPanel />
      <FlowLinesLeft />
      <EtlCenterCore />
      <FlowLinesRight />
      <UnifiedIntelligencePanel />
    </div>
  );
}

function Zap() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="zap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="zap">
          <path d={svgPaths.p2660c000} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Zap />
    </div>
  );
}

function BenefitIcon() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="benefit-icon">
      <IconWrapper18 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[11px] text-white w-full">Real-time Data</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[10px] w-full">{`Instant streaming & ingestion`}</p>
    </div>
  );
}

function BenefitItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-name="benefit-item">
      <BenefitIcon />
      <Frame14 />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="shield-check">
          <path d={svgPaths.p45959d0} id="Vector" stroke="var(--stroke-0, #06B6D4)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <ShieldCheck />
    </div>
  );
}

function BenefitIcon1() {
  return (
    <div className="bg-[rgba(6,182,212,0.1)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="benefit-icon">
      <IconWrapper19 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[11px] text-white w-full">High Accuracy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[10px] w-full">{`Precision cleaning & parsing`}</p>
    </div>
  );
}

function BenefitItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-name="benefit-item">
      <BenefitIcon1 />
      <Frame15 />
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="eye">
          <path d={svgPaths.p1e3462c0} id="Vector" stroke="var(--stroke-0, #A855F7)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Eye />
    </div>
  );
}

function BenefitIcon2() {
  return (
    <div className="bg-[rgba(168,85,247,0.1)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="benefit-icon">
      <IconWrapper20 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[11px] text-white w-full">Deeper Insights</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[10px] w-full">Enriched contextual metrics</p>
    </div>
  );
}

function BenefitItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-name="benefit-item">
      <BenefitIcon2 />
      <Frame16 />
    </div>
  );
}

function Award() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="award">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="award">
          <path d={svgPaths.p34beed00} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Award />
    </div>
  );
}

function BenefitIcon3() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="benefit-icon">
      <IconWrapper21 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[11px] text-white w-full">Better Decisions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[10px] w-full">Empowered conversion rates</p>
    </div>
  );
}

function BenefitItem3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-name="benefit-item">
      <BenefitIcon3 />
      <Frame17 />
    </div>
  );
}

function TrendingUp() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="trending-up">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="trending-up">
          <path d={svgPaths.p39419680} id="Vector" stroke="var(--stroke-0, #06B6D4)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <TrendingUp />
    </div>
  );
}

function BenefitIcon4() {
  return (
    <div className="bg-[rgba(6,182,212,0.1)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="benefit-icon">
      <IconWrapper22 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[11px] text-white w-full">Business Growth</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[10px] w-full">Optimized execution scale</p>
    </div>
  );
}

function BenefitItem4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-name="benefit-item">
      <BenefitIcon4 />
      <Frame18 />
    </div>
  );
}

function BenefitsPanel() {
  return (
    <div className="bg-[#0c0e1e] relative rounded-[16px] shrink-0 w-full" data-name="benefits-panel">
      <div aria-hidden className="absolute border border-[#1e2238] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-[16px] relative size-full">
          <BenefitItem />
          <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[40px]" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
                    <line id="Line" stroke="var(--stroke-0, #1E2238)" x2="40" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <BenefitItem1 />
          <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[40px]" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
                    <line id="Line" stroke="var(--stroke-0, #1E2238)" x2="40" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <BenefitItem2 />
          <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[40px]" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
                    <line id="Line" stroke="var(--stroke-0, #1E2238)" x2="40" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <BenefitItem3 />
          <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[40px]" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
                    <line id="Line" stroke="var(--stroke-0, #1E2238)" x2="40" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <BenefitItem4 />
        </div>
      </div>
    </div>
  );
}

export default function EtlPipelineInfographic() {
  return (
    <div className="bg-[#060713] content-stretch flex flex-col gap-[24px] items-center justify-center px-[60px] py-[40px] relative size-full" data-name="etl-pipeline-infographic">
      <div className="absolute left-[350px] size-[400px] top-[150px]" data-name="glow-purple-bg">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 600">
            <g filter="url(#filter0_f_36_473)" id="glow-purple-bg">
              <circle cx="300" cy="300" fill="var(--fill-0, #A855F7)" fillOpacity="0.1" r="200" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="600" id="filter0_f_36_473" width="600" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_36_473" stdDeviation="50" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[750px] size-[400px] top-[150px]" data-name="glow-teal-bg">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 600">
            <g filter="url(#filter0_f_36_471)" id="glow-teal-bg">
              <circle cx="300" cy="300" fill="var(--fill-0, #06B6D4)" fillOpacity="0.1" r="200" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="600" id="filter0_f_36_471" width="600" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_36_471" stdDeviation="50" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <FlowSection />
      <BenefitsPanel />
    </div>
  );
}