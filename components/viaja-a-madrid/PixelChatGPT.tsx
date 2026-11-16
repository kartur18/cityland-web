import Script from "next/script";
import { PIXEL_CHATGPT_ID } from "@/lib/viaja-a-madrid";

// Píxel de medición de ChatGPT Ads, solo en esta landing. Es el script oficial de OpenAI (developers.openai.com/ads/measurement-pixel).
// Los eventos que se mandan (ver analitica-landing.ts) no llevan nombres, teléfonos ni documentos.
export default function PixelChatGPT() {
  const codigo = `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:${JSON.stringify(PIXEL_CHATGPT_ID)}});`;
  return <Script id="pixel-chatgpt-ads" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: codigo }} />;
}
