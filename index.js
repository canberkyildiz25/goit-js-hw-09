import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".gallery");a.addEventListener("click",e=>{if(e.preventDefault(),e.target.classList.contains("gallery-image")){let s=function(t){t.code==="Escape"&&i.close()};const c=e.target.dataset.source,n=e.target.getAttribute("alt"),i=basicLightbox.create(`
            <div class="lightbox-content">
                <img src="${c}" width="800" height="600">
                <div class="lightbox-description">${n}</div>
            </div>
        `,{onShow:t=>{document.addEventListener("keydown",s),setTimeout(()=>{const o=document.querySelector(".lightbox-description");o&&o.classList.add("visible")},250)},onClose:t=>{document.removeEventListener("keydown",s)}});i.show()}});
//# sourceMappingURL=index.js.map
