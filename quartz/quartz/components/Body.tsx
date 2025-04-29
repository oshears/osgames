// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// Script to be executed after DOM is loaded
// const remark42Script = () => {
//   // Create a container for comments if it doesn't exist
//   if (!document.getElementById('remark42')) {
//     const commentsContainer = document.createElement('div');
//     commentsContainer.id = 'remark42';
//     document.querySelector('#quartz-body')?.appendChild(commentsContainer);
//   }
  
//   // Create config script
//   const configScript = document.createElement('script');
//   configScript.textContent = `
//     var remark_config = {
//       host: "http://192.168.50.28:8081",
//       site_id: "osgames",
//       components: ['embed'],
//       theme: window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches ? "dark" : "light",
//     };
    
//     if (window.matchMedia) {
//       window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', event => {
//         const newColorScheme = event.matches ? "dark" : "light";
//         if (window.REMARK42) {
//           window.REMARK42.changeTheme(newColorScheme);
//         }
//       });
//     }
//   `;
//   document.body.appendChild(configScript);
  
//   // Create and add the Remark42 embed script
//   const embedScript = document.createElement('script');
//   embedScript.async = true;
//   embedScript.defer = true;
//   embedScript.src = `http://192.168.50.28:8081/web/embed.js`;
//   document.body.appendChild(embedScript);
// }

// // The Body component definition without JSX
// const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
//   // Use vanilla DOM creation instead of JSX
//   const div = document.createElement('div');
//   div.id = 'quartz-body';
  
//   // Append children
//   div.appendChild(children as unknown as Node);
  
//   // Create comment container
//   const commentDiv = document.createElement('div');
//   commentDiv.id = 'remark42';
//   div.appendChild(commentDiv);
  
//   return div;
// }

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}


// // Combine the scripts
// const combinedScript = () => {
//   if (typeof clipboardScript === 'function') {
//     clipboardScript();
//   }
//   remark42Script();
// }

Body.afterDOMLoaded = clipboardScript;
Body.css = clipboardStyle;

export default (() => Body) satisfies QuartzComponentConstructor;