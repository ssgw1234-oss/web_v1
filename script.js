const categories = [
  { name: "설비", icon: "⚙", color: "#1264e8", tint: "#e8f1ff" },
  { name: "품질", icon: "Q", color: "#7b4ce2", tint: "#f0ebff" },
  { name: "사람", icon: "人", color: "#0b9d80", tint: "#e5f8f3" },
  { name: "물류", icon: "□", color: "#e68a00", tint: "#fff3df" },
  { name: "생산", icon: "P", color: "#e04466", tint: "#ffeaf0" },
  { name: "환경안전", icon: "＋", color: "#1188a5", tint: "#e4f6fa" }
];

const manuals = [
  {
    id: 1, category: "설비", title: "CNC 가공기 일일 점검 표준", date: "2026.06.12", version: "v3.2", isNew: true,
    summary: "가동 전 필수 점검 항목과 이상 발생 시 조치 기준을 안내합니다.",
    owner: "설비기술팀", steps: ["주 전원 투입 전 비상정지 버튼의 작동 상태를 확인합니다.", "윤활유와 절삭유의 잔량 및 누유 여부를 확인합니다.", "공구 체결 상태와 안전 커버의 닫힘 상태를 점검합니다.", "공회전 3분 후 이상 소음과 진동 여부를 기록합니다."],
    caution: "점검 중 이상이 발견되면 설비를 가동하지 말고 현장 책임자와 설비기술팀에 즉시 공유하세요."
  },
  {
    id: 2, category: "품질", title: "초도품 검사 및 승인 절차", date: "2026.06.10", version: "v2.1", isNew: true,
    summary: "신규 생산 및 조건 변경 후 초도품 검사와 승인 과정을 설명합니다.",
    owner: "품질보증팀", steps: ["작업 지시서와 최신 도면의 품번 및 개정 번호를 대조합니다.", "규정된 수량의 초도품을 채취하고 핵심 치수를 측정합니다.", "외관, 기능, 치수 검사 결과를 초도품 검사표에 입력합니다.", "품질 담당자의 최종 승인 후 양산을 시작합니다."],
    caution: "승인 전 제품은 식별표를 부착해 별도 구역에 보관하며 양산품과 혼입되지 않도록 합니다."
  },
  {
    id: 3, category: "환경안전", title: "화학물질 누출 비상 대응", date: "2026.06.09", version: "v4.0", isNew: false,
    summary: "화학물질 누출 시 작업자 대피와 초기 대응 원칙을 안내합니다.",
    owner: "EHS팀", steps: ["누출을 발견하면 주변 작업자에게 큰 소리로 알리고 비상 버튼을 누릅니다.", "물질과 접촉하지 말고 바람이 불어오는 방향의 안전 구역으로 대피합니다.", "현장 책임자는 물질명, 누출 위치, 규모를 비상 연락망에 따라 보고합니다.", "교육받은 대응 인원만 보호구를 착용하고 확산 방지 작업을 수행합니다."],
    caution: "신원 미상의 물질에는 접근하지 마세요. 인명 구조가 필요한 경우에도 반드시 적정 보호구를 착용해야 합니다."
  },
  {
    id: 4, category: "생산", title: "라인 교체 시 작업 전환 절차", date: "2026.06.05", version: "v1.8", isNew: false,
    summary: "품목 전환 과정의 자재 정리, 조건 설정, 시생산 기준을 제공합니다.",
    owner: "생산관리팀", steps: ["이전 생산품과 잔여 자재를 지정 장소로 완전히 이동합니다.", "작업대와 설비 내부를 청소하고 혼입 가능성을 확인합니다.", "신규 품목의 작업 표준서에 따라 설비 조건을 설정합니다.", "시생산품 확인과 현장 책임자 승인 후 본 생산을 진행합니다."],
    caution: "이전 품목의 라벨, 포장재, 반제품이 남아 있지 않은지 2인 교차 확인을 실시하세요."
  },
  {
    id: 5, category: "물류", title: "지게차 운행 및 적재 안전 기준", date: "2026.06.02", version: "v2.7", isNew: false,
    summary: "사업장 내 지게차 운행 속도와 화물 적재 시 안전 수칙입니다.",
    owner: "물류운영팀", steps: ["운행 전 브레이크, 조향 장치, 경광등과 포크를 점검합니다.", "사업장 제한 속도와 보행자 우선 원칙을 준수합니다.", "화물의 무게 중심을 확인하고 허용 하중을 초과하지 않습니다.", "주차 시 포크를 바닥에 내리고 주차 브레이크를 체결합니다."],
    caution: "자격을 승인받은 작업자만 지게차를 운행할 수 있으며 포크 위에 사람을 태우면 안 됩니다."
  },
  {
    id: 6, category: "사람", title: "신규 작업자 현장 배치 교육", date: "2026.05.29", version: "v3.0", isNew: false,
    summary: "신규 작업자의 배치 전 필수 교육과 숙련도 확인 기준을 정리했습니다.",
    owner: "인사교육팀", steps: ["기본 안전교육과 사업장 공통 규칙 교육 이수 여부를 확인합니다.", "담당 공정의 위험 요인과 표준 작업 방법을 이론 교육합니다.", "숙련 작업자의 지도 아래 단계별 실습을 진행합니다.", "평가표 기준을 충족하고 책임자 승인 후 단독 작업을 허용합니다."],
    caution: "교육 미이수자 또는 평가 기준 미달자는 반드시 지도 작업자와 함께 근무해야 합니다."
  },
  {
    id: 7, category: "품질", title: "공정 불량 발생 시 격리 조치", date: "2026.05.25", version: "v2.4", isNew: false,
    summary: "불량품 발견부터 격리, 식별, 보고까지의 초기 조치를 설명합니다.",
    owner: "품질관리팀", steps: ["불량 발견 즉시 해당 공정을 정지하고 현장 책임자에게 알립니다.", "최종 정상 확인 시점 이후 생산품을 모두 격리 구역으로 이동합니다.", "부적합 식별표에 품번, 수량, 불량 유형을 정확히 기재합니다.", "품질 담당자의 판정 전까지 임의로 재작업하거나 폐기하지 않습니다."],
    caution: "의심 제품도 양품과 분리해야 하며 격리품의 수량과 현물 수량이 일치하는지 확인하세요."
  },
  {
    id: 8, category: "환경안전", title: "보호구 착용 및 관리 지침", date: "2026.05.20", version: "v1.9", isNew: false,
    summary: "공정별 개인 보호구의 올바른 착용과 교체 기준을 안내합니다.",
    owner: "EHS팀", steps: ["작업 구역 표지에 지정된 보호구 종류를 확인합니다.", "착용 전 균열, 오염, 변형과 유효기간을 점검합니다.", "보호구가 신체에 밀착되도록 끈과 밴드를 조절합니다.", "사용 후 지정된 방법으로 세척하여 보관함에 보관합니다."],
    caution: "손상되거나 오염된 보호구는 즉시 교체하고 다른 작업자와 공용하지 마세요."
  }
];

const categoryGrid = document.querySelector("#categoryGrid");
const manualGrid = document.querySelector("#manualGrid");
const resultCount = document.querySelector("#resultCount");
const manualTitle = document.querySelector("#manualTitle");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
const detailPanel = document.querySelector("#detailPanel");
const detailContent = document.querySelector("#detailContent");
const panelBack = document.querySelector("#panelBack");
const panelPath = document.querySelector("#panelPath");

let activeCategory = "전체";
let searchTerm = "";
let selectedManual = null;
let panelView = "overview";
let selectedStep = 0;

function getCategoryStyle(name) {
  return categories.find((category) => category.name === name) || categories[0];
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map((category) => {
    const count = manuals.filter((manual) => manual.category === category.name).length;
    return `
      <button class="category-card${activeCategory === category.name ? " active" : ""}" type="button"
        data-category="${category.name}" style="--card-color:${category.color}; --card-tint:${category.tint}">
        <span class="category-icon">${category.icon}</span>
        <strong>${category.name}</strong>
        <small>${count}개의 매뉴얼</small>
      </button>`;
  }).join("");
}

function getFilteredManuals() {
  const normalizedTerm = searchTerm.trim().toLowerCase();
  return manuals.filter((manual) => {
    const matchesCategory = activeCategory === "전체" || manual.category === activeCategory;
    const searchable = `${manual.title} ${manual.summary} ${manual.category} ${manual.owner}`.toLowerCase();
    return matchesCategory && (!normalizedTerm || searchable.includes(normalizedTerm));
  });
}

function renderManuals() {
  const filtered = getFilteredManuals();
  const hasFilter = activeCategory !== "전체" || searchTerm;
  manualTitle.textContent = hasFilter ? "매뉴얼 검색 결과" : "최근 업데이트 매뉴얼";
  resultCount.textContent = `총 ${filtered.length}건`;
  manualGrid.hidden = filtered.length === 0;
  emptyState.hidden = filtered.length !== 0;

  manualGrid.innerHTML = filtered.map((manual) => {
    const category = getCategoryStyle(manual.category);
    return `
      <button class="manual-card" type="button" data-manual-id="${manual.id}" aria-label="${manual.title} 상세 보기">
        <span class="manual-card-top">
          <span class="category-badge" style="--badge-color:${category.color}; --badge-bg:${category.tint}">${manual.category}</span>
          ${manual.isNew ? '<span class="new-badge">NEW</span>' : ""}
        </span>
        <h3>${manual.title}</h3>
        <p>${manual.summary}</p>
        <span class="manual-meta">
          <span>업데이트 ${manual.date}</span>
          <span>${manual.version} · 상세보기 →</span>
        </span>
      </button>`;
  }).join("");
}

function applyFilters() {
  renderCategories();
  renderManuals();
  document.querySelector(".manuals-section").scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetFilters(shouldScroll = true) {
  activeCategory = "전체";
  searchTerm = "";
  searchInput.value = "";
  renderCategories();
  renderManuals();
  if (shouldScroll) document.querySelector(".manuals-section").scrollIntoView({ behavior: "smooth" });
}

function openManual(id) {
  const manual = manuals.find((item) => item.id === Number(id));
  if (!manual) return;
  selectedManual = manual;
  panelView = "overview";
  renderPanel();

  requestAnimationFrame(() => detailPanel.classList.add("open"));
  detailPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("panel-open");
  document.querySelector("#panelClose").focus();
}

function renderPanel() {
  if (!selectedManual) return;
  const manual = selectedManual;
  panelBack.hidden = panelView === "overview";

  if (panelView === "steps") {
    panelPath.textContent = `${manual.category} / 작업 절차`;
    detailContent.innerHTML = `
      <div class="drill-header">
        <span class="drill-overline">표준 작업 절차</span>
        <h2 id="detailTitle">${manual.title}</h2>
        <p>확인할 단계를 선택하세요.</p>
      </div>
      <div class="drill-list">
        ${manual.steps.map((step, index) => `
          <button class="drill-item" type="button" data-step-index="${index}">
            <span class="drill-number">${String(index + 1).padStart(2, "0")}</span>
            <span><strong>${index + 1}단계</strong><small>${step}</small></span>
            <span class="drill-arrow">→</span>
          </button>`).join("")}
      </div>`;
    return;
  }

  if (panelView === "step") {
    const step = manual.steps[selectedStep];
    panelPath.textContent = `${manual.category} / 작업 절차 / ${selectedStep + 1}단계`;
    detailContent.innerHTML = `
      <div class="step-detail">
        <span class="step-index">STEP ${String(selectedStep + 1).padStart(2, "0")}</span>
        <h2 id="detailTitle">${selectedStep + 1}단계 작업</h2>
        <p>${step}</p>
        <div class="step-progress" aria-label="전체 ${manual.steps.length}단계 중 ${selectedStep + 1}단계">
          ${manual.steps.map((_, index) => `<i class="${index <= selectedStep ? "active" : ""}"></i>`).join("")}
        </div>
      </div>
      <div class="notice-box"><strong>작업 전 확인</strong><br>${manual.caution}</div>
      <div class="step-actions">
        <button type="button" data-step-move="prev" ${selectedStep === 0 ? "disabled" : ""}>이전 단계</button>
        <button class="primary-action" type="button" data-step-move="next">${selectedStep === manual.steps.length - 1 ? "목록으로" : "다음 단계"}</button>
      </div>`;
    return;
  }

  if (panelView === "caution") {
    panelPath.textContent = `${manual.category} / 주의사항`;
    detailContent.innerHTML = `
      <div class="drill-header">
        <span class="drill-overline">필수 확인</span>
        <h2 id="detailTitle">주의사항</h2>
        <p>${manual.title}</p>
      </div>
      <div class="caution-detail"><strong>작업 전 반드시 확인하세요</strong><p>${manual.caution}</p></div>`;
    return;
  }

  panelPath.textContent = `${manual.category} / 매뉴얼 개요`;
  detailContent.innerHTML = `
    <div class="detail-header">
      <span class="detail-label">${manual.category} 매뉴얼</span>
      <h2 id="detailTitle">${manual.title}</h2>
      <p>${manual.summary}</p>
      <div class="detail-info"><span>담당 ${manual.owner}</span><span>개정 ${manual.version}</span><span>${manual.date}</span></div>
    </div>
    <div class="detail-body hierarchy-menu">
      <h3>매뉴얼 구성</h3>
      <button class="hierarchy-item" type="button" data-panel-view="steps">
        <span class="hierarchy-icon">01</span>
        <span><strong>표준 작업 절차</strong><small>${manual.steps.length}개 단계별 안내</small></span>
        <span>→</span>
      </button>
      <button class="hierarchy-item" type="button" data-panel-view="caution">
        <span class="hierarchy-icon caution">!</span>
        <span><strong>주의사항</strong><small>작업 전 필수 확인 내용</small></span>
        <span>→</span>
      </button>
    </div>
    <div class="detail-actions">
      <button class="secondary-action" type="button" onclick="window.print()">인쇄</button>
      <button class="primary-action" type="button" data-panel-view="steps">절차 시작</button>
    </div>`;
}

function closePanel() {
  detailPanel.classList.remove("open");
  detailPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("panel-open");
}

function goBackPanel() {
  panelView = panelView === "step" ? "steps" : "overview";
  renderPanel();
}

categoryGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-category]");
  if (!card) return;
  activeCategory = card.dataset.category;
  searchTerm = "";
  searchInput.value = "";
  applyFilters();
});

manualGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-manual-id]");
  if (card) openManual(card.dataset.manualId);
});

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  activeCategory = "전체";
  searchTerm = searchInput.value;
  applyFilters();
});

document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.search;
    searchTerm = button.dataset.search;
    activeCategory = "전체";
    applyFilters();
  });
});

document.querySelector("#showAllButton").addEventListener("click", () => resetFilters());
document.querySelector("#resetButton").addEventListener("click", () => resetFilters());
document.querySelector("#panelClose").addEventListener("click", closePanel);
panelBack.addEventListener("click", goBackPanel);
detailContent.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-panel-view]");
  if (viewButton) {
    panelView = viewButton.dataset.panelView;
    renderPanel();
    return;
  }

  const stepButton = event.target.closest("[data-step-index]");
  if (stepButton) {
    selectedStep = Number(stepButton.dataset.stepIndex);
    panelView = "step";
    renderPanel();
    return;
  }

  const moveButton = event.target.closest("[data-step-move]");
  if (!moveButton || moveButton.disabled) return;
  if (moveButton.dataset.stepMove === "prev") selectedStep -= 1;
  else if (selectedStep < selectedManual.steps.length - 1) selectedStep += 1;
  else panelView = "steps";
  renderPanel();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && detailPanel.classList.contains("open")) closePanel();
});

renderCategories();
renderManuals();
