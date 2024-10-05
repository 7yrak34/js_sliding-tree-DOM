document.querySelector(".tree").querySelectorAll("li").forEach(function(e){var t=e.querySelector("ul"),n=document.createElement("span");n.textContent=e.firstChild.textContent,e.firstChild.replaceWith(n),n.addEventListener("click",function(){t.toggleAttribute("hidden")})});
//# sourceMappingURL=index.aaa717cc.js.map
