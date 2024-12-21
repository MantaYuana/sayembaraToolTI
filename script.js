function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  const contents = [
    document.getElementById("content-1"),
    document.getElementById("content-2"),
    document.getElementById("content-3"),
  ];
  const icons = [
    document.getElementById("icon-1"),
    document.getElementById("icon-2"),
    document.getElementById("icon-3"),
  ];

  const downSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-8 h-8">
<path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
`;

  const upSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-8 h-8">
<path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
</svg>
`;

  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0";
    icon.innerHTML = upSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.innerHTML = downSVG;
  }

  for (let i = 0; i < contents.length; i++) {
    if (i == index - 1) {
      console.log(i);
      continue;
    }
    contents[i].style.maxHeight = "0";
    icons[i].innerHTML = upSVG;
  }
}
