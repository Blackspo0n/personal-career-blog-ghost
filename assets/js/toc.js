

function makeToc() {
  const sections = Array.from(document.querySelectorAll(".gh-content h2[id],.gh-content h3[id]"));

  const navigation = document.createElement("nav");
  navigation.classList.add("toc");
  const list = document.createElement("ul");

  sections.forEach(entry => {
    const sectionId = entry.id;
    const anker = document.createElement("a");
    anker.href = "#" + sectionId;
    anker.innerHTML = entry.innerHTML;
    
    const li = document.createElement('li');
    li.classList.add("toc-" + entry.nodeName )
    li.appendChild(anker);

    list.appendChild(li);
  });

  if(list.childElementCount > 0) {
    navigation.appendChild(list);
    const sidebar = document.querySelector(".main-content aside:first-child");
    sidebar.appendChild(navigation);

  }
}

const scrollHandler = entries =>
entries.forEach(entry => {
  const section = entry.target;
  const sectionId = section.id;
  const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);

  if(sectionLink !== undefined && sectionLink !== null) {
    if (entry.intersectionRatio > 0) {
      section.classList.add("visible");
      sectionLink.classList.add("highlight");
    } else {
      section.classList.remove("visible");
      sectionLink.classList.remove("highlight");
    }
  }
});

const observer = new IntersectionObserver(scrollHandler);
function ObserveHeaders() {
  const sections = Array.from(document.querySelectorAll(".gh-content h2[id],.gh-content h3[id]"));

  sections.forEach(section => observer.observe(section));
}

function ObserveSections() {
  const sections = Array.from(document.querySelectorAll("section[id]"));

  sections.forEach(section => observer.observe(section));
}

makeToc();
