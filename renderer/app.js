const MASTER_CONFIGS = [
  {
    key: 'packUnits',
    title: '포장 단위',
    columns: [
      { key: 'branchName', label: '지점명', aliases: ['식당', '지점', '매장명'] },
      { key: 'packKg', label: '내용량(kg)', type: 'number', aliases: ['내용량', '포장단위', '중량'] },
      { key: 'note', label: '비고', aliases: ['메모'] },
    ],
  },
  {
    key: 'itemNames',
    title: '품명 사전',
    columns: [
      {
        key: 'type',
        label: '분류',
        type: 'select',
        options: ['육류', '어류'],
        aliases: ['구분'],
      },
      { key: 'keyword', label: '상품명 키워드/패턴', aliases: ['키워드', '상품명'] },
      { key: 'standardName', label: '표준 품명', aliases: ['품명', '표준품명'] },
    ],
  },
  {
    key: 'usages',
    title: '용도 사전',
    columns: [{ key: 'value', label: '용도값(예: 불고기용)', aliases: ['용도', '용도값'] }],
  },
  {
    key: 'specs',
    title: '규격 사전',
    columns: [
      {
        key: 'type',
        label: '분류',
        type: 'select',
        options: ['육류', '어류'],
        aliases: ['구분'],
      },
      { key: 'value', label: '규격', aliases: ['규격값'] },
    ],
  },
  {
    key: 'productReports',
    title: '품목보고번호',
    columns: [
      { key: 'itemName', label: '품명', aliases: ['품목', '표준 품명'] },
      { key: 'productName', label: '제품명', aliases: ['제품 품명'] },
      { key: 'reportNo', label: '품목보고번호', aliases: ['품목제조보고번호', '보고번호'] },
      { key: 'itemType', label: '품목명', aliases: ['식품유형'] },
      { key: 'declaredAt', label: '신고일자', type: 'date', aliases: ['신(보)고일자', '신고일'] },
      { key: 'stoppedAt', label: '생산중단일자', type: 'date', aliases: ['생산중단일'] },
      { key: 'shelfLifeText', label: '소비기한 문구', aliases: ['소비기한', '유통기한 문구'] },
      { key: 'ingredients', label: '원재료(배합비)', aliases: ['원재료', '원재료및함량', '성분 및 함량'] },
    ],
  },
  {
    key: 'traceability',
    title: '이력번호',
    columns: [
      { key: 'itemName', label: '품명', aliases: ['품목'] },
      { key: 'traceNo', label: '이력번호', aliases: ['이력번호값'] },
      { key: 'slaughterhouse', label: '도축장', aliases: ['도축장명'] },
      { key: 'slaughterDate', label: '도축일', type: 'date', aliases: ['도축일자'] },
      { key: 'availableKg', label: '가능양(kg)', type: 'number', aliases: ['가능양', '가능수량'] },
    ],
  },
];

const MEAT_NOTICE = [
  '▶ 허가번호 : 제2025-0279555호',
  '▶ 포장재질 : 내포장재-폴리에틸렌(PE) / 외포장재 - 종이박스',
  '▶ 교환및 반품 : 제조 판매원 및 구입처',
  '▶ 냉동제품은 이미 냉동된 바 있으니 해동후 재냉동 시키지 마시기 바랍니다.',
  '▶ 본 제품은 공정거래위원회 고시 소비자분쟁해결기준에 의거 교환 또는 보상받을 수 있습니다.',
  '▶ 불량식품신고번호 : 국번없이 1399',
].join('\n');

const FISH_NOTICE = [
  '식품위생법 제 10조에 의한 표시사항',
  '식품의 유형 기타수산물가공품',
  '물품등급 상품 식품제조번호 제 2025-0279550호',
  '제조원 주식회사 미진푸드(070-5100-6045)',
  '소재지 인천시 남동구 앵고개로 654번길 113',
  '보관방법 -18\'C 이하 냉동보관',
  '품목제조보고번호 2025027955015 소비기한 제조일로부터 365일',
  '포장재질 내포장지 [PE] 외포장지 [PLASTIC 골판지]',
  '이 제품은 난류,고등어,게,새우,돼지고기,닭고기,쇠고기,오징어,조개류를 사용한 제품과 같은 제조시설에서 제조되고 있습니다.',
  '불량식품신고번호 국번없이 1399',
].join('\n');

const DEFAULT_STORE = {
  masters: {
    packUnits: [],
    itemNames: [],
    usages: [],
    specs: [],
    productReports: [],
    traceability: [],
    defaults: {
      manufacturer:
        '(주)미진푸드/인천시 남동구 앵고개로654번길 113 (고잔동) 3층/070-5100-6044',
      seller: '',
      foodType: '',
      licenseNo: '제2025-0279555호',
    },
  },
  imports: [],
  labels: [],
  printAudit: [],
};

const KOREAN_WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];
const FISH_KEYWORDS = ['고등어', '오징어', '코다리', '임연수', '연어', '명태', '갈치', '삼치', '대구'];
const ORIGIN_KEYWORDS = ['국내산', '중국산', '러시아산', '미국산', '호주산', '캐나다산', '뉴질랜드산', '베트남산', '칠레산', '노르웨이산'];
const FLOW_STEPS = [
  { tab: 'upload', title: '엑셀 업로드' },
  { tab: 'masters', title: '관리 데이터' },
  { tab: 'labels', title: '라벨 편집' },
  { tab: 'print', title: '인쇄/검수' },
];
const WORKSPACE_META = {
  upload: {
    eyebrow: 'Upload Workspace',
    title: '엑셀 업로드 및 작업표',
    description: '',
  },
  masters: {
    eyebrow: 'Master Data',
    title: '관리 데이터 설정',
    description: '자동 바인딩 기준이 되는 마스터 데이터를 항목별 탭으로 정리해 관리합니다.',
  },
  labels: {
    eyebrow: 'Label Editor',
    title: '라벨 편집 워크스페이스',
    description: '생성된 라벨을 그룹 단위로 검토하고, 필요한 필드만 바로 수정합니다.',
  },
  print: {
    eyebrow: 'Print Review',
    title: '인쇄 미리보기 및 검수',
    description: '중복 라벨과 경고 항목을 먼저 확인한 뒤 실제 출력으로 이어집니다.',
  },
};
const MASTER_TAB_DESCRIPTIONS = {
  defaults: '제조원, 판매원, 식품유형, 허가번호의 기본 입력값을 설정합니다.',
  packUnits: '지점별 포장 단위 기준을 관리해 중량 분할 라벨 생성을 맞춥니다.',
  itemNames: '상품명 키워드와 표준 품명을 연결해 자동 바인딩 정확도를 높입니다.',
  usages: '용도값을 관리해 상품명 패턴에서 용도를 자동 추출합니다.',
  specs: '육류와 어류 규격 기준값을 관리해 라벨 규격을 일관되게 맞춥니다.',
  productReports: '품목보고번호, 품목명, 원재료 등 제품 기준 정보를 관리합니다.',
  traceability: '이력번호, 도축장, 도축일, 가능양 기준을 관리합니다.',
};
const MASTER_REQUIRED_KEYS = ['packUnits', 'itemNames', 'productReports', 'traceability'];
const MASTER_MENU_TABS = [
  { key: 'defaults', title: '기본값 프로필' },
  ...MASTER_CONFIGS.map((config) => ({ key: config.key, title: config.title })),
];
const WARNING_FIELD_GUIDES = {
  '품명 미매핑': { fieldKey: 'itemName', guide: '품명 사전에서 매핑하거나 품명을 직접 입력하세요.' },
  '원산지 미매핑': { fieldKey: 'origin', guide: '상품명 원산지 키워드를 확인하거나 원산지를 직접 입력하세요.' },
  '품목제조보고번호 미매핑': { fieldKey: 'reportNo', guide: '품목보고번호 마스터를 등록하거나 번호를 직접 입력하세요.' },
  '이력번호 미매핑': { fieldKey: 'traceNo', guide: '이력번호 마스터를 보강하거나 이력번호를 직접 입력하세요.' },
};
const FIELD_CHOICE_MANUAL = '__manual__';

const state = {
  store: structuredClone(DEFAULT_STORE),
  selectedImportIds: new Set(),
  selectedLabelId: null,
  activeTab: 'upload',
  activeMasterTab: 'defaults',
  parseSummary: null,
  lastImportSnapshot: null,
  importDiagnostics: {},
  importTable: {
    search: '',
    warningsOnly: false,
    sort: 'modified-desc',
  },
  pendingPrintCheck: null,
  pendingMasterSync: null,
  saveTimer: null,
  isSaving: false,
  needsSave: false,
};

const refs = {};

document.addEventListener('DOMContentLoaded', init);

async function init() {
  cacheRefs();
  state.activeTab =
    refs.tabPanels
      .find((panel) => panel.classList.contains('active'))
      ?.id?.replace('tab-', '') || 'upload';
  bindTabActions();
  bindUploadActions();
  bindMasterActions();
  bindLabelActions();
  bindToolbarActions();

  const [meta, loadedStore] = await Promise.all([
    window.desktopApi.getMeta(),
    window.desktopApi.loadStore(),
  ]);

  refs.metaText.textContent = `버전 ${meta.version} | 저장위치 ${meta.storePath}`;

  state.store = sanitizeStore(loadedStore || DEFAULT_STORE);
  state.selectedImportIds = new Set(state.store.imports.map((row) => row.id));
  refreshImportDiagnostics();

  updateLayoutOffsets();
  renderEverything();
}

function cacheRefs() {
  refs.appHeader = document.querySelector('.app-header');
  refs.metaText = document.getElementById('meta-text');
  refs.saveButton = document.getElementById('save-button');
  refs.flowStepper = document.getElementById('flow-stepper');
  refs.workspaceEyebrow = document.getElementById('workspace-eyebrow');
  refs.workspaceTitle = document.getElementById('workspace-title');
  refs.workspaceDescription = document.getElementById('workspace-description');
  refs.metricImportsLabel = document.getElementById('metric-imports-label');
  refs.metricLabelsLabel = document.getElementById('metric-labels-label');
  refs.metricWarningsLabel = document.getElementById('metric-warnings-label');
  refs.metricStageLabel = document.getElementById('metric-stage-label');
  refs.metricImports = document.getElementById('metric-imports');
  refs.metricLabels = document.getElementById('metric-labels');
  refs.metricWarnings = document.getElementById('metric-warnings');
  refs.metricStage = document.getElementById('metric-stage');
  refs.filePicker = document.querySelector('.file-picker');
  refs.filePickerName = document.getElementById('file-picker-name');
  refs.tabButtons = Array.from(document.querySelectorAll('.tab-button'));
  refs.tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

  refs.fileInput = document.getElementById('excel-file');
  refs.parseButton = document.getElementById('parse-button');
  refs.cancelUploadButton = document.getElementById('cancel-upload-button');
  refs.clearImportsButton = document.getElementById('clear-imports-button');
  refs.generateLabelsButton = document.getElementById('generate-labels-button');
  refs.uploadSummary = document.getElementById('upload-summary');
  refs.importsTableBody = document.querySelector('#imports-table tbody');
  refs.importSearch = document.getElementById('import-search');
  refs.importSort = document.getElementById('import-sort');
  refs.importWarningOnly = document.getElementById('import-warning-only');
  refs.selectVisibleButton = document.getElementById('select-visible-button');
  refs.clearSelectionButton = document.getElementById('clear-selection-button');
  refs.importVisibleCount = document.getElementById('import-visible-count');
  refs.importSelectedCount = document.getElementById('import-selected-count');
  refs.importWarningCount = document.getElementById('import-warning-count');

  refs.defaultManufacturer = document.getElementById('default-manufacturer');
  refs.defaultSeller = document.getElementById('default-seller');
  refs.defaultFoodType = document.getElementById('default-food-type');
  refs.defaultLicenseNo = document.getElementById('default-license-no');
  refs.masterMenu = document.getElementById('master-menu');
  refs.masterDefaultsPanel = document.getElementById('master-defaults-panel');
  refs.masterTables = document.getElementById('master-tables');

  refs.labelsList = document.getElementById('labels-list');
  refs.labelSourcePanel = document.getElementById('label-source-panel');
  refs.labelWarningPanel = document.getElementById('label-warning-panel');
  refs.labelForm = document.getElementById('label-form');
  refs.clearLabelsButton = document.getElementById('clear-labels');

  refs.printButton = document.getElementById('print-button');
  refs.printArea = document.getElementById('print-area');
  refs.printSummary = document.getElementById('print-summary');

  refs.toastRegion = document.getElementById('toast-region');

  refs.printCheckModal = document.getElementById('print-check-modal');
  refs.printCheckSummary = document.getElementById('print-check-summary');
  refs.printCheckLabelBox = document.getElementById('print-check-label-box');
  refs.printCheckWarningBox = document.getElementById('print-check-warning-box');
  refs.printCheckGoLabels = document.getElementById('print-check-go-labels');
  refs.printCheckCancel = document.getElementById('print-check-cancel');
  refs.printCheckConfirm = document.getElementById('print-check-confirm');

  refs.masterSyncModal = document.getElementById('master-sync-modal');
  refs.masterSyncMessage = document.getElementById('master-sync-message');
  refs.masterSyncList = document.getElementById('master-sync-list');
  refs.masterSyncCancel = document.getElementById('master-sync-cancel');
  refs.masterSyncConfirm = document.getElementById('master-sync-confirm');
}

function bindToolbarActions() {
  refs.saveButton.addEventListener('click', async () => {
    await saveStoreNow();
  });

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'escape' && !refs.masterSyncModal.hidden) {
      closeMasterSyncModal(false);
      return;
    }

    if (key === 'escape' && !refs.printCheckModal.hidden) {
      closePrintCheckModal();
      return;
    }

    if (!(event.metaKey || event.ctrlKey)) {
      return;
    }

    if (key === 's') {
      event.preventDefault();
      saveStoreNow();
    }

    if (key === 'p') {
      event.preventDefault();
      openPrintCheckModal();
    }
  });

  window.addEventListener('resize', () => {
    updateLayoutOffsets();
    if (state.activeTab === 'labels') {
      requestAnimationFrame(fitPrintSheetText);
    }
  });
}

function updateLayoutOffsets() {
  const headerHeight = refs.appHeader?.offsetHeight || 78;
  document.documentElement.style.setProperty('--header-offset', `${headerHeight}px`);
}

function bindTabActions() {
  refs.tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      switchTab(button.dataset.tab);
    });
  });
}

function bindUploadActions() {
  refs.fileInput.addEventListener('change', () => {
    renderUploadFileSelection();
    renderHeaderMetrics();
  });
  refs.parseButton.addEventListener('click', parseExcelFile);
  refs.cancelUploadButton.addEventListener('click', cancelLastUpload);
  refs.clearImportsButton.addEventListener('click', clearAllImports);
  refs.importSearch.addEventListener('input', (event) => {
    state.importTable.search = event.target.value || '';
    renderImportsTable();
  });
  refs.importSort.addEventListener('change', (event) => {
    state.importTable.sort = event.target.value || 'modified-desc';
    renderImportsTable();
  });
  refs.importWarningOnly.addEventListener('change', (event) => {
    state.importTable.warningsOnly = Boolean(event.target.checked);
    renderImportsTable();
  });
  refs.selectVisibleButton.addEventListener('click', () => {
    const visibleRows = getVisibleImports();
    visibleRows.forEach((row) => state.selectedImportIds.add(row.id));
    renderImportsTable();
    notify(`보이는 ${visibleRows.length}개 행을 선택했습니다.`, 'info');
  });
  refs.clearSelectionButton.addEventListener('click', () => {
    state.selectedImportIds.clear();
    renderImportsTable();
    notify('선택된 행을 해제했습니다.', 'info');
  });

  refs.importsTableBody.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      return;
    }
    if (target.matches('input[type="checkbox"][data-import-id]')) {
      const id = target.dataset.importId;
      if (target.checked) {
        state.selectedImportIds.add(id);
      } else {
        state.selectedImportIds.delete(id);
      }
      renderImportSelectionStats(getVisibleImports());
    }
  });

  refs.generateLabelsButton.addEventListener('click', async () => {
    if (!state.store.imports.length) {
      notify('먼저 엑셀을 파싱해 주세요.', 'warning');
      return;
    }

    const selectedRows = state.store.imports.filter((row) => state.selectedImportIds.has(row.id));
    if (!selectedRows.length) {
      notify('라벨을 만들 행을 선택해 주세요.', 'warning');
      return;
    }

    const selectedIds = new Set(selectedRows.map((row) => row.id));
    state.store.labels = state.store.labels.filter((label) => !selectedIds.has(label.sourceRowId));

    let createdCount = 0;
    selectedRows.forEach((row) => {
      const created = createLabelsFromImportRow(row);
      createdCount += created.length;
      state.store.labels.push(...created);
    });

    if (!createdCount) {
      notify('생성된 라벨이 없습니다. 수량 또는 필수값을 확인해 주세요.', 'warning');
      return;
    }

    state.selectedLabelId = state.store.labels[state.store.labels.length - 1].id;
    await saveStoreNow();
    renderImportsTable();
    renderLabelsList();
    renderLabelEditor();
    renderPrintArea();
    renderHeaderMetrics();
    switchTab('labels');

    const warningLabels = state.store.labels.filter(
      (label) => selectedIds.has(label.sourceRowId) && label.warnings.length > 0
    ).length;
    notify(`${createdCount}개의 라벨이 생성되었습니다.`, 'success');
    if (warningLabels > 0) {
      notify(`생성 라벨 중 ${warningLabels}개에 경고가 있습니다.`, 'warning', 4200);
    }
  });
}

function bindMasterActions() {
  refs.masterMenu.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const tabButton = target.closest('button[data-master-tab]');
    if (!tabButton) {
      return;
    }

    state.activeMasterTab = tabButton.dataset.masterTab || 'defaults';
    renderMasterMenu();
    renderMasterTables();
  });

  refs.masterTables.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const uploadButton = target.closest('button[data-action="upload-master-excel"]');
    if (uploadButton) {
      const masterKey = uploadButton.dataset.masterKey;
      const actionGroup = uploadButton.closest('.master-actions');
      const fileInput = actionGroup?.querySelector('input[type="file"][data-action="upload-master-excel-input"]');
      if (!(fileInput instanceof HTMLInputElement)) {
        notify('업로드 입력 요소를 찾지 못했습니다.', 'warning');
        return;
      }
      if (fileInput.dataset.masterKey !== masterKey) {
        notify('업로드 대상 데이터가 일치하지 않습니다.', 'warning');
        return;
      }
      fileInput.click();
      return;
    }

    const downloadButton = target.closest('button[data-action="download-master-excel"]');
    if (downloadButton) {
      const masterKey = downloadButton.dataset.masterKey;
      downloadMasterSheetFile(masterKey);
      return;
    }

    const addButton = target.closest('button[data-action="add-master-row"]');
    if (addButton) {
      const masterKey = addButton.dataset.masterKey;
      addMasterRow(masterKey);
      return;
    }

    const deleteButton = target.closest('button[data-action="delete-master-row"]');
    if (deleteButton) {
      const masterKey = deleteButton.dataset.masterKey;
      const rowId = deleteButton.dataset.rowId;
      deleteMasterRow(masterKey, rowId);
    }
  });

  refs.masterTables.addEventListener('change', async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
      return;
    }

    if (target instanceof HTMLInputElement && target.type === 'file') {
      if (target.dataset.action !== 'upload-master-excel-input') {
        return;
      }
      const masterKey = target.dataset.masterKey;
      const file = target.files?.[0];
      await importMasterSheetFile(masterKey, file);
      target.value = '';
      return;
    }

    const masterKey = target.dataset.masterKey;
    const rowId = target.dataset.rowId;
    const columnKey = target.dataset.columnKey;

    if (!masterKey || !rowId || !columnKey) {
      return;
    }

    const row = state.store.masters[masterKey].find((item) => item.id === rowId);
    if (!row) {
      return;
    }

    const config = MASTER_CONFIGS.find((item) => item.key === masterKey);
    const column = config.columns.find((item) => item.key === columnKey);

    row[columnKey] = column.type === 'number' ? parseNumber(target.value) : target.value;
    refreshImportDiagnostics();
    renderImportsTable();
    renderHeaderMetrics();
    queueSave();
  });

  [
    [refs.defaultManufacturer, 'manufacturer'],
    [refs.defaultSeller, 'seller'],
    [refs.defaultFoodType, 'foodType'],
    [refs.defaultLicenseNo, 'licenseNo'],
  ].forEach(([element, key]) => {
    element.addEventListener('change', () => {
      state.store.masters.defaults[key] = element.value;
      refreshImportDiagnostics();
      renderImportsTable();
      queueSave();
    });
  });
}

function bindLabelActions() {
  refs.labelsList.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const row = target.closest('[data-label-id]');
    if (!row) {
      return;
    }

    state.selectedLabelId = row.dataset.labelId;
    renderLabelsList();
    renderLabelEditor();
  });

  refs.labelWarningPanel.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const focusButton = target.closest('button[data-warning-field]');
    if (focusButton) {
      focusLabelField(focusButton.dataset.warningField);
      return;
    }

    const nextButton = target.closest('button[data-action="goto-next-warning"]');
    if (nextButton) {
      gotoNextWarningLabel();
    }
  });

  refs.labelForm.addEventListener('change', async (event) => {
    const target = event.target;
    if (
      !(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)
    ) {
      return;
    }

    const fieldKey = target.dataset.candidateField || target.name;
    if (!fieldKey) {
      return;
    }

    const selectedLabel = getSelectedLabel();
    if (!selectedLabel) {
      return;
    }

    const previousValue = selectedLabel.fields[fieldKey] || '';
    const isCandidateSelect = Boolean(target.dataset.candidateField);
    let syncedMasterCount = 0;

    if (isCandidateSelect) {
      if (target.value === FIELD_CHOICE_MANUAL) {
        selectedLabel.manualOverrides[fieldKey] = true;
        if (getFieldCandidateOptions(selectedLabel, fieldKey).some((option) => option.value === previousValue)) {
          selectedLabel.fields[fieldKey] = '';
        }
      } else {
        setLabelFieldValue(selectedLabel, fieldKey, target.value, { manual: false });
      }
    } else {
      setLabelFieldValue(selectedLabel, fieldKey, target.value, { manual: true });
    }

    syncLinkedLabelFields(selectedLabel, fieldKey);
    selectedLabel.updatedAt = new Date().toISOString();

    if (fieldKey === 'packagingType') {
      recalculateShelfLife(selectedLabel);
    }

    applyWarnings(selectedLabel);

    if (!isCandidateSelect) {
      const syncOperations = buildMasterSyncOperations(selectedLabel, fieldKey, previousValue);
      if (syncOperations.length) {
        const shouldSync = await openMasterSyncModal(syncOperations);
        if (shouldSync) {
          syncedMasterCount = applyMasterSyncOperations(syncOperations);
        }
      }
    }

    if (syncedMasterCount > 0) {
      refreshImportDiagnostics();
      if (state.activeTab === 'upload') {
        renderImportsTable();
      }
      if (state.activeTab === 'masters') {
        renderMasterTables();
      }
      notify(`${syncedMasterCount}건의 관리 데이터를 반영했습니다.`, 'success');
    }

    queueSave();
    renderLabelsList();
    renderLabelEditor();
    renderPrintArea();
    renderHeaderMetrics();

    if (isCandidateSelect && target.value === FIELD_CHOICE_MANUAL) {
      requestAnimationFrame(() => {
        focusLabelField(fieldKey);
      });
    }
  });

  refs.clearLabelsButton.addEventListener('click', async () => {
    if (!state.store.labels.length) {
      notify('삭제할 라벨이 없습니다.', 'info');
      return;
    }

    const answer = window.confirm('생성된 모든 라벨을 삭제하시겠습니까?');
    if (!answer) {
      return;
    }

    state.store.labels = [];
    state.selectedLabelId = null;
    await saveStoreNow();
    renderLabelsList();
    renderLabelEditor();
    renderPrintArea();
    renderHeaderMetrics();
    notify('생성 라벨을 모두 삭제했습니다.', 'info');
  });

  refs.printButton.addEventListener('click', () => {
    openPrintCheckModal();
  });

  refs.printCheckCancel.addEventListener('click', () => {
    closePrintCheckModal();
  });
  refs.printCheckConfirm.addEventListener('click', async () => {
    await executePrintFromCheck();
  });
  refs.printCheckGoLabels.addEventListener('click', () => {
    jumpToFirstWarningLabel();
  });
  refs.printCheckModal.addEventListener('click', (event) => {
    if (event.target === refs.printCheckModal) {
      closePrintCheckModal();
    }
  });

  refs.masterSyncCancel.addEventListener('click', () => {
    closeMasterSyncModal(false);
  });
  refs.masterSyncConfirm.addEventListener('click', () => {
    closeMasterSyncModal(true);
  });
  refs.masterSyncModal.addEventListener('click', (event) => {
    if (event.target === refs.masterSyncModal) {
      closeMasterSyncModal(false);
    }
  });
}

async function parseExcelFile() {
  const file = refs.fileInput.files?.[0];
  if (!file) {
    notify('엑셀 파일을 선택해 주세요.', 'warning');
    return;
  }

  try {
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[firstSheetName];
    const rawRows = XLSX.utils.sheet_to_json(sheet, {
      defval: '',
      raw: true,
    });

    const parsedRows = [];
    let excluded = 0;

    state.lastImportSnapshot = {
      imports: structuredClone(state.store.imports),
      labels: structuredClone(state.store.labels),
      selectedImportIds: [...state.selectedImportIds],
      parseSummary: state.parseSummary ? { ...state.parseSummary } : null,
      selectedLabelId: state.selectedLabelId,
    };

    rawRows.forEach((row, index) => {
      if (isSummaryRow(row) || isEmptyRawRow(row)) {
        excluded += 1;
        return;
      }

      const supplyDate = normalizeDate(extractByHeader(row, '납품일자'));
      const restaurant = String(extractByHeader(row, '식당') || '').trim();
      const productName = String(extractByHeader(row, '상품명') || '').trim();
      const unit = String(extractByHeader(row, '단위') || '').trim();
      const quantity = parseNumber(extractByHeader(row, '수량'));
      const note = String(extractByHeader(row, '비고') || '').trim();
      const modifiedAt = normalizeDateTime(extractByHeader(row, '수정시간'));

      const requiredFilled = [supplyDate, restaurant, productName, unit].every(
        (value) => String(value).trim() !== ''
      );

      if (!requiredFilled || quantity <= 0) {
        excluded += 1;
        return;
      }

      parsedRows.push({
        id: safeId(`imp-${index}`),
        supplyDate,
        restaurant,
        productName,
        unit,
        quantity,
        note,
        modifiedAt,
        rawIndex: index + 1,
      });
    });

    state.store.imports = parsedRows;
    state.selectedImportIds = new Set(parsedRows.map((row) => row.id));
    state.parseSummary = {
      total: rawRows.length,
      valid: parsedRows.length,
      excluded,
      fileName: file.name,
    };
    refreshImportDiagnostics();

    await saveStoreNow();
    renderImportsTable();
    renderUploadSummary();
    renderHeaderMetrics();

    if (!parsedRows.length) {
      notify(
        '유효한 행이 없습니다. 필수값(납품일자/식당/상품명/단위/수량)을 확인해 주세요.',
        'warning',
        4200
      );
      return;
    }
    notify(`파싱 완료: 유효 ${parsedRows.length}행 / 제외 ${excluded}행`, 'success');
  } catch (error) {
    notify(`엑셀 파싱 실패: ${error.message}`, 'error', 5000);
  }
}

async function importMasterSheetFile(masterKey, file) {
  const config = MASTER_CONFIGS.find((item) => item.key === masterKey);
  if (!config) {
    notify('업로드 대상 관리 데이터를 찾지 못했습니다.', 'warning');
    return;
  }

  if (!file) {
    return;
  }

  try {
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: 'array' });
    const sheet = getMasterSheetFromWorkbook(workbook, config);

    if (!sheet) {
      notify(`${config.title} 업로드 실패: 시트를 찾지 못했습니다.`, 'warning', 4200);
      return;
    }

    const rows = parseMasterRowsFromSheet(sheet, config);
    if (!rows.length) {
      notify(
        `${config.title} 업로드 실패: 읽어들인 행이 없습니다. 헤더가 없더라도 컬럼 순서는 다운로드 템플릿과 같아야 합니다.`,
        'warning',
        5000
      );
      return;
    }
    const answer = window.confirm(`${config.title} 데이터를 업로드 파일 내용(${rows.length}행)으로 교체하시겠습니까?`);
    if (!answer) {
      return;
    }

    state.store.masters[config.key] = rows;
    refreshImportDiagnostics();
    renderMasterTables();
    renderImportsTable();
    renderHeaderMetrics();
    queueSave();

    notify(`${config.title} 업로드 완료 (${rows.length}행 반영)`, 'success');
  } catch (error) {
    notify(`${config.title} 업로드 실패: ${error.message}`, 'error', 5000);
  }
}

function downloadMasterSheetFile(masterKey) {
  const config = MASTER_CONFIGS.find((item) => item.key === masterKey);
  if (!config) {
    notify('다운로드 대상 관리 데이터를 찾지 못했습니다.', 'warning');
    return;
  }

  try {
    const workbook = XLSX.utils.book_new();
    const headers = config.columns.map((column) => column.label);
    const rows = (state.store.masters[config.key] || []).map((row) => {
      return config.columns.reduce((acc, column) => {
        acc[column.label] = row[column.key] ?? '';
        return acc;
      }, {});
    });

    const sheet = rows.length
      ? XLSX.utils.json_to_sheet(rows, { header: headers })
      : XLSX.utils.aoa_to_sheet([headers]);
    XLSX.utils.book_append_sheet(workbook, sheet, config.title);

    const fileName = `${config.title}_${formatDate(new Date())}.xlsx`;
    const workbookArray = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
    const blob = new Blob([workbookArray], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1200);

    notify(`${config.title} 엑셀 다운로드를 시작했습니다.`, 'success');
  } catch (error) {
    notify(`${config.title} 다운로드 실패: ${error.message}`, 'error', 5000);
  }
}

function getMasterSheetFromWorkbook(workbook, config) {
  const byName = workbook.SheetNames.find((sheetName) => normalizeHeader(sheetName) === normalizeHeader(config.title));
  if (byName) {
    return workbook.Sheets[byName];
  }

  const byKey = workbook.SheetNames.find((sheetName) => normalizeHeader(sheetName) === normalizeHeader(config.key));
  if (byKey) {
    return workbook.Sheets[byKey];
  }

  const firstSheetName = workbook.SheetNames[0];
  return firstSheetName ? workbook.Sheets[firstSheetName] : null;
}

function parseMasterRowsFromSheet(sheet, config) {
  const rawMatrix = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: '',
    raw: true,
  });

  const headerRowIndex = findMasterHeaderRowIndex(rawMatrix, config);
  const headerRow = headerRowIndex >= 0 ? rawMatrix[headerRowIndex] : null;
  const dataRows = headerRowIndex >= 0 ? rawMatrix.slice(headerRowIndex + 1) : rawMatrix;

  return dataRows.reduce((acc, rawCells) => {
    if (!hasAnyIndexedMasterCellValue(rawCells)) {
      return acc;
    }

    const row = { id: safeId(`mst-${config.key}`) };
    config.columns.forEach((column, columnIndex) => {
      row[column.key] = resolveIndexedValueByColumn(rawCells, headerRow, column, columnIndex);
    });

    if (!hasAnyResolvedMasterValue(row, config)) {
      return acc;
    }

    acc.push(row);
    return acc;
  }, []);
}

function findMasterHeaderRowIndex(rawMatrix, config) {
  const scanLimit = Math.min(rawMatrix.length, 5);
  let bestIndex = -1;
  let bestScore = 0;

  for (let rowIndex = 0; rowIndex < scanLimit; rowIndex += 1) {
    const row = Array.isArray(rawMatrix[rowIndex]) ? rawMatrix[rowIndex] : [];
    const score = row.reduce((acc, cell) => acc + (isKnownMasterHeaderCell(cell, config) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestIndex = rowIndex;
    }
  }

  return bestScore > 0 ? bestIndex : -1;
}

function isKnownMasterHeaderCell(cellValue, config) {
  const normalizedCell = normalizeHeader(cellValue);
  if (!normalizedCell) {
    return false;
  }

  return config.columns.some((column) => {
    return getMasterColumnMatchers(column).some((matcher) => matcher === normalizedCell);
  });
}

function hasAnyIndexedMasterCellValue(rawCells) {
  return Array.isArray(rawCells) && rawCells.some((cell) => String(cell ?? '').trim() !== '');
}

function hasAnyResolvedMasterValue(row, config) {
  return config.columns.some((column) => String(row[column.key] ?? '').trim() !== '');
}

function resolveIndexedValueByColumn(rawCells, headerRow, column, columnIndex) {
  const rawValue = headerRow
    ? resolveIndexedValueByHeader(rawCells, headerRow, column)
    : rawCells[columnIndex];

  return coerceMasterCellValue(rawValue, column);
}

function resolveIndexedValueByHeader(rawCells, headerRow, column) {
  const targetMatchers = getMasterColumnMatchers(column);
  for (let index = 0; index < headerRow.length; index += 1) {
    if (targetMatchers.includes(normalizeHeader(headerRow[index]))) {
      return rawCells[index];
    }
  }
  return '';
}

function getMasterColumnMatchers(column) {
  return [column.label, column.key, ...(column.aliases || [])].map((value) => normalizeHeader(value));
}

function coerceMasterCellValue(rawValue, column) {
  if (column.type === 'date') {
    const normalized = normalizeDate(rawValue);
    return normalized || String(rawValue ?? '').trim();
  }

  if (column.type === 'number') {
    const rawText = String(rawValue ?? '')
      .replace(/,/g, '')
      .trim();
    return rawText === '' ? 0 : parseNumber(rawText);
  }

  if (column.type === 'select') {
    const text = String(rawValue ?? '').trim();
    if (!text) {
      return column.options[0];
    }

    const direct = column.options.find((option) => option === text);
    if (direct) {
      return direct;
    }

    const normalized = normalizeHeader(text);
    return column.options.find((option) => normalizeHeader(option) === normalized) || column.options[0];
  }

  return String(rawValue ?? '').trim();
}

async function cancelLastUpload() {
  const hasFile = Boolean(refs.fileInput.files?.length);
  const hasSnapshot = Boolean(state.lastImportSnapshot);

  if (!hasFile && !hasSnapshot) {
    notify('취소할 업로드 작업이 없습니다.', 'info');
    return;
  }

  const answer = window.confirm('마지막 업로드를 취소하고 이전 상태로 되돌리시겠습니까?');
  if (!answer) {
    return;
  }

  if (state.lastImportSnapshot) {
    state.store.imports = structuredClone(state.lastImportSnapshot.imports);
    state.store.labels = structuredClone(state.lastImportSnapshot.labels);
    state.selectedImportIds = new Set(state.lastImportSnapshot.selectedImportIds);
    state.parseSummary = state.lastImportSnapshot.parseSummary
      ? { ...state.lastImportSnapshot.parseSummary }
      : null;
    state.selectedLabelId = state.lastImportSnapshot.selectedLabelId || null;
    state.lastImportSnapshot = null;
  }
  refreshImportDiagnostics();

  refs.fileInput.value = '';
  renderUploadFileSelection();
  await saveStoreNow();
  renderImportsTable();
  renderUploadSummary();
  renderLabelsList();
  renderLabelEditor();
  renderPrintArea();
  renderHeaderMetrics();
  notify('마지막 업로드를 취소하고 이전 상태로 되돌렸습니다.', 'info');
}

async function clearAllImports() {
  const hasImports = state.store.imports.length > 0;
  const hasFile = Boolean(refs.fileInput.files?.length);
  if (!hasImports && !hasFile) {
    notify('삭제할 업로드 데이터가 없습니다.', 'info');
    return;
  }

  const answer = window.confirm('추출 데이터 전체를 삭제하시겠습니까? 연결된 라벨도 함께 삭제됩니다.');
  if (!answer) {
    return;
  }

  const sourceIds = new Set(state.store.imports.map((row) => row.id));
  state.store.labels = state.store.labels.filter((label) => !sourceIds.has(label.sourceRowId));
  state.store.imports = [];
  state.selectedImportIds = new Set();
  state.importDiagnostics = {};
  state.parseSummary = null;
  state.lastImportSnapshot = null;

  if (state.selectedLabelId && !state.store.labels.some((label) => label.id === state.selectedLabelId)) {
    state.selectedLabelId = state.store.labels[0]?.id || null;
  }

  refs.fileInput.value = '';
  renderUploadFileSelection();
  await saveStoreNow();
  renderImportsTable();
  renderUploadSummary();
  renderLabelsList();
  renderLabelEditor();
  renderPrintArea();
  renderHeaderMetrics();
  notify('추출 데이터와 연결 라벨을 모두 삭제했습니다.', 'info');
}

function createLabelsFromImportRow(row) {
  const labelType = detectLabelType(row.productName);
  const packUnit = labelType === '어류' ? 10 : findPackUnitKg(row.restaurant);
  const splits = splitWeights(row.quantity, packUnit);
  const itemName = findStandardItemName(row.productName, labelType);
  const storageType = detectStorageType(row.productName);
  const origin = detectOrigin(row.productName);
  const usage = detectUsage(row.productName);
  const spec = detectSpec(row.productName, labelType);

  const manufactureDate =
    labelType === '어류' ? calcFishManufactureDate(row.supplyDate) : calcMeatManufactureDate(row.supplyDate);

  const productReport = findProductReportByItemName(itemName);
  const traceability = findTraceabilityByItemName(itemName, row.quantity);

  const created = splits.map((pieceWeight, index) => {
    const fields = {
      labelType,
      deliveryPlace: row.restaurant,
      itemName,
      deliveryDate: row.supplyDate,
      deliveryDateWithWeekday: `${row.supplyDate} (${weekdayText(row.supplyDate)})`,
      weightDisplay:
        labelType === '어류'
          ? `${formatWeight(pieceWeight)}kg (총 ${formatWeight(row.quantity)}kg)`
          : `${formatWeight(pieceWeight)} / ${formatWeight(row.quantity)}kg`,
      pieceWeight: formatWeight(pieceWeight),
      totalWeight: formatWeight(row.quantity),
      manufactureDate,
      packagingType: '일반포장',
      storageType,
      shelfLifeDate: '',
      origin,
      usage,
      spec,
      ingredients: productReport?.ingredients || (labelType === '어류' ? `${itemName || '어류'} 100%` : ''),
      reportNo: productReport?.reportNo || (labelType === '어류' ? '2025027955015' : ''),
      productType: productReport?.itemType || (labelType === '어류' ? '기타수산물가공품' : ''),
      storageMethod: storageType === '냉동' ? "-18'C 이하 냉동보관" : "-2'C ~ -5'C 냉장보관",
      slaughterhouse: traceability?.slaughterhouse || '',
      traceNo: traceability?.traceNo || '',
      manufacturer: state.store.masters.defaults.manufacturer,
      seller: state.store.masters.defaults.seller,
      foodType: state.store.masters.defaults.foodType,
      licenseNo: state.store.masters.defaults.licenseNo,
      note: row.note || '',
      fixedNotice: labelType === '어류' ? FISH_NOTICE : MEAT_NOTICE,
      sourceProductName: row.productName,
    };

    const label = {
      id: safeId(`lbl-${row.id}-${index + 1}`),
      sourceRowId: row.id,
      splitIndex: index + 1,
      splitCount: splits.length,
      fields,
      manualOverrides: {},
      warnings: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    recalculateShelfLife(label);
    applyWarnings(label);
    return label;
  });

  return created;
}

function recalculateShelfLife(label) {
  const fields = label.fields;

  if (!fields.manufactureDate) {
    fields.shelfLifeDate = '';
    return;
  }

  const baseDate = parseDate(fields.manufactureDate);
  if (!baseDate) {
    fields.shelfLifeDate = '';
    return;
  }

  let plusDays = 14;

  if (fields.labelType === '어류') {
    plusDays = 365;
  } else if (fields.storageType === '냉동') {
    plusDays = 365;
  } else if (fields.packagingType === '진공포장') {
    plusDays = 45;
  }

  fields.shelfLifeDate = formatDate(addDays(baseDate, plusDays));
}

function applyWarnings(label) {
  const warnings = [];
  const fields = label.fields;

  if (!fields.itemName) warnings.push('품명 미매핑');
  if (!fields.origin) warnings.push('원산지 미매핑');
  if (!fields.reportNo) warnings.push('품목제조보고번호 미매핑');
  if (fields.labelType === '육류' && !fields.traceNo) warnings.push('이력번호 미매핑');

  label.warnings = warnings;
}

function refreshImportDiagnostics() {
  const importIdSet = new Set(state.store.imports.map((row) => row.id));
  state.selectedImportIds = new Set([...state.selectedImportIds].filter((id) => importIdSet.has(id)));

  state.importDiagnostics = state.store.imports.reduce((acc, row) => {
    acc[row.id] = analyzeImportRow(row);
    return acc;
  }, {});
}

function analyzeImportRow(row) {
  const labelType = detectLabelType(row.productName);
  const itemName = findStandardItemName(row.productName, labelType);
  const origin = detectOrigin(row.productName);
  const report = findProductReportByItemName(itemName);
  const traceability = findTraceabilityByItemName(itemName, row.quantity);
  const warnings = [];

  if (!origin) warnings.push('원산지 미매핑');
  if (labelType === '육류' && !report?.reportNo) warnings.push('품목제조보고번호 미매핑');
  if (labelType === '육류' && !traceability?.traceNo) warnings.push('이력번호 미매핑');

  return { labelType, itemName, warnings };
}

function trimText(value) {
  return String(value ?? '').trim();
}

function uniqueChoiceOptions(options = []) {
  const map = new Map();

  options.forEach((option) => {
    const value = trimText(option?.value);
    if (!value || map.has(value)) {
      return;
    }

    map.set(value, {
      ...option,
      value,
    });
  });

  return [...map.values()];
}

function getLabelSourceProductName(label) {
  const sourceRow = getImportRowById(label?.sourceRowId);
  return trimText(sourceRow?.productName || label?.fields?.sourceProductName || label?.fields?.itemName);
}

function getRequiredTraceabilityKg(label) {
  return parseNumber(label?.fields?.totalWeight || label?.fields?.pieceWeight);
}

function buildChoiceLabel(parts) {
  return parts.map((part) => trimText(part)).filter(Boolean).join(' · ');
}

function getItemNameCandidates(productName, labelType) {
  const text = trimText(productName);
  if (!text) {
    return [];
  }

  return state.store.masters.itemNames
    .filter((row) => {
      const keyword = trimText(row.keyword);
      const standardName = trimText(row.standardName);
      if (!keyword || !standardName) {
        return false;
      }

      if (labelType && row.type !== labelType) {
        return false;
      }

      return text.includes(keyword);
    })
    .sort((left, right) => {
      const keywordDiff = trimText(right.keyword).length - trimText(left.keyword).length;
      if (keywordDiff !== 0) {
        return keywordDiff;
      }

      return trimText(left.standardName).localeCompare(trimText(right.standardName), 'ko');
    });
}

function getUsageCandidates(productName) {
  const text = trimText(productName);
  if (!text) {
    return [];
  }

  return state.store.masters.usages
    .filter((row) => {
      const value = trimText(row.value);
      return value && text.includes(value);
    })
    .sort((left, right) => trimText(right.value).length - trimText(left.value).length);
}

function getSpecCandidates(productName, labelType) {
  const text = trimText(productName);
  if (!text) {
    return [];
  }

  return state.store.masters.specs
    .filter((row) => {
      const value = trimText(row.value);
      if (!value) {
        return false;
      }

      if (labelType && row.type !== labelType) {
        return false;
      }

      return text.includes(value);
    })
    .sort((left, right) => trimText(right.value).length - trimText(left.value).length);
}

function getProductReportCandidates(itemName) {
  const normalizedItemName = trimText(itemName);
  if (!normalizedItemName) {
    return [];
  }

  return state.store.masters.productReports
    .filter((row) => trimText(row.itemName) === normalizedItemName)
    .slice()
    .sort((left, right) => {
      const leftActive = trimText(left.stoppedAt) ? 0 : 1;
      const rightActive = trimText(right.stoppedAt) ? 0 : 1;
      if (leftActive !== rightActive) {
        return rightActive - leftActive;
      }

      const leftDeclared = parseDate(left.declaredAt)?.getTime() || 0;
      const rightDeclared = parseDate(right.declaredAt)?.getTime() || 0;
      if (leftDeclared !== rightDeclared) {
        return rightDeclared - leftDeclared;
      }

      return trimText(left.reportNo).localeCompare(trimText(right.reportNo), 'ko');
    });
}

function getTraceabilityCandidates(itemName, requiredKg) {
  const normalizedItemName = trimText(itemName);
  if (!normalizedItemName) {
    return [];
  }

  return state.store.masters.traceability
    .filter((row) => trimText(row.itemName) === normalizedItemName)
    .slice()
    .sort((left, right) => {
      const leftCan = parseNumber(left.availableKg) >= requiredKg ? 1 : 0;
      const rightCan = parseNumber(right.availableKg) >= requiredKg ? 1 : 0;
      if (leftCan !== rightCan) {
        return rightCan - leftCan;
      }

      const leftDate = parseDate(left.slaughterDate)?.getTime() || 0;
      const rightDate = parseDate(right.slaughterDate)?.getTime() || 0;
      if (leftDate !== rightDate) {
        return rightDate - leftDate;
      }

      return trimText(left.traceNo).localeCompare(trimText(right.traceNo), 'ko');
    });
}

function getItemNameCandidateOptions(label) {
  return uniqueChoiceOptions(
    getItemNameCandidates(getLabelSourceProductName(label), label.fields.labelType).map((row) => ({
      value: row.standardName,
      label: buildChoiceLabel([row.standardName, row.keyword]),
      row,
    }))
  );
}

function getUsageCandidateOptions(label) {
  return uniqueChoiceOptions(
    getUsageCandidates(getLabelSourceProductName(label)).map((row) => ({
      value: row.value,
      label: row.value,
      row,
    }))
  );
}

function getSpecCandidateOptions(label) {
  return uniqueChoiceOptions(
    getSpecCandidates(getLabelSourceProductName(label), label.fields.labelType).map((row) => ({
      value: row.value,
      label: buildChoiceLabel([row.value, row.type]),
      row,
    }))
  );
}

function getProductReportCandidateOptions(label) {
  return uniqueChoiceOptions(
    getProductReportCandidates(label.fields.itemName)
      .map((row) => ({
        value: row.reportNo,
        label: buildChoiceLabel([row.reportNo, row.itemType, row.productName || row.itemName]),
        row,
      }))
      .filter((option) => trimText(option.value))
  );
}

function getTraceabilityCandidateOptions(label) {
  return uniqueChoiceOptions(
    getTraceabilityCandidates(label.fields.itemName, getRequiredTraceabilityKg(label))
      .map((row) => ({
        value: row.traceNo,
        label: buildChoiceLabel([
          row.traceNo,
          row.slaughterhouse,
          parseNumber(row.availableKg) > 0 ? `${formatWeight(row.availableKg)}kg` : '',
        ]),
        row,
      }))
      .filter((option) => trimText(option.value))
  );
}

function getFieldCandidateOptions(label, fieldKey) {
  switch (fieldKey) {
    case 'itemName':
      return getItemNameCandidateOptions(label);
    case 'usage':
      return getUsageCandidateOptions(label);
    case 'spec':
      return getSpecCandidateOptions(label);
    case 'reportNo':
      return getProductReportCandidateOptions(label);
    case 'traceNo':
      return getTraceabilityCandidateOptions(label);
    default:
      return [];
  }
}

function getFieldControlConfig(label, field) {
  if (field.type === 'textarea' || field.type === 'select') {
    return {
      mode: field.type,
      candidateOptions: [],
      showManualInput: false,
      selectedChoiceValue: '',
    };
  }

  const candidateOptions = getFieldCandidateOptions(label, field.key);
  if (candidateOptions.length < 2) {
    return {
      mode: 'text',
      candidateOptions,
      showManualInput: true,
      selectedChoiceValue: '',
    };
  }

  const currentValue = trimText(label.fields[field.key]);
  const hasMatchingOption = candidateOptions.some((option) => option.value === currentValue);
  const showManualInput = !hasMatchingOption && (Boolean(currentValue) || Boolean(label.manualOverrides[field.key]));

  return {
    mode: 'candidate',
    candidateOptions,
    showManualInput,
    selectedChoiceValue: hasMatchingOption ? currentValue : showManualInput ? FIELD_CHOICE_MANUAL : '',
  };
}

function setLabelFieldValue(label, fieldKey, value, options = {}) {
  label.fields[fieldKey] = value;
  if (options.manual === true) {
    label.manualOverrides[fieldKey] = true;
    return;
  }

  if (options.manual === false) {
    delete label.manualOverrides[fieldKey];
  }
}

function syncLinkedFieldValue(label, fieldKey, value) {
  if (label.manualOverrides[fieldKey]) {
    return;
  }

  label.fields[fieldKey] = value;
  delete label.manualOverrides[fieldKey];
}

function applyProductReportToLabel(label, row, options = {}) {
  if (!row) {
    return;
  }

  const includeReportNo = options.includeReportNo !== false;
  if (includeReportNo) {
    syncLinkedFieldValue(label, 'reportNo', trimText(row.reportNo));
  }
  syncLinkedFieldValue(
    label,
    'ingredients',
    trimText(row.ingredients) || (label.fields.labelType === '어류' ? `${trimText(label.fields.itemName) || '어류'} 100%` : '')
  );
  syncLinkedFieldValue(label, 'productType', trimText(row.itemType));
}

function clearProductReportFields(label) {
  if (!label.manualOverrides.reportNo) {
    label.fields.reportNo = '';
    delete label.manualOverrides.reportNo;
  }

  if (!label.manualOverrides.productType) {
    label.fields.productType = '';
    delete label.manualOverrides.productType;
  }

  if (!label.manualOverrides.ingredients) {
    label.fields.ingredients =
      label.fields.labelType === '어류' && trimText(label.fields.itemName)
        ? `${trimText(label.fields.itemName)} 100%`
        : '';
    delete label.manualOverrides.ingredients;
  }
}

function applyTraceabilityToLabel(label, row, options = {}) {
  if (!row) {
    return;
  }

  const includeTraceNo = options.includeTraceNo !== false;
  if (includeTraceNo) {
    syncLinkedFieldValue(label, 'traceNo', trimText(row.traceNo));
  }
  syncLinkedFieldValue(label, 'slaughterhouse', trimText(row.slaughterhouse));
}

function clearTraceabilityFields(label) {
  if (!label.manualOverrides.traceNo) {
    label.fields.traceNo = '';
    delete label.manualOverrides.traceNo;
  }

  if (!label.manualOverrides.slaughterhouse) {
    label.fields.slaughterhouse = '';
    delete label.manualOverrides.slaughterhouse;
  }
}

function syncLinkedLabelFields(label, fieldKey) {
  if (fieldKey === 'itemName') {
    const productReportCandidates = getProductReportCandidates(label.fields.itemName);
    const currentReportRow = productReportCandidates.find(
      (row) => trimText(row.reportNo) && trimText(row.reportNo) === trimText(label.fields.reportNo)
    );

    if (currentReportRow) {
      applyProductReportToLabel(label, currentReportRow);
    } else if (productReportCandidates.length === 1) {
      applyProductReportToLabel(label, productReportCandidates[0]);
    } else {
      clearProductReportFields(label);
    }

    const traceabilityCandidates = getTraceabilityCandidates(label.fields.itemName, getRequiredTraceabilityKg(label));
    const currentTraceRow = traceabilityCandidates.find(
      (row) => trimText(row.traceNo) && trimText(row.traceNo) === trimText(label.fields.traceNo)
    );

    if (currentTraceRow) {
      applyTraceabilityToLabel(label, currentTraceRow);
    } else if (traceabilityCandidates.length === 1) {
      applyTraceabilityToLabel(label, traceabilityCandidates[0]);
    } else {
      clearTraceabilityFields(label);
    }

    return;
  }

  if (fieldKey === 'reportNo') {
    const selectedReport = getProductReportCandidates(label.fields.itemName).find(
      (row) => trimText(row.reportNo) === trimText(label.fields.reportNo)
    );
    if (selectedReport) {
      applyProductReportToLabel(label, selectedReport);
    }
    return;
  }

  if (fieldKey === 'traceNo') {
    const selectedTraceability = getTraceabilityCandidates(label.fields.itemName, getRequiredTraceabilityKg(label)).find(
      (row) => trimText(row.traceNo) === trimText(label.fields.traceNo)
    );
    if (selectedTraceability) {
      applyTraceabilityToLabel(label, selectedTraceability);
    }
  }
}

function createMasterSyncOperation(config) {
  return {
    ...config,
    apply: config.apply,
  };
}

function buildDefaultsSyncOperation(fieldKey, value) {
  const defaultsMeta = {
    manufacturer: '제조원 기본값',
    seller: '판매원 기본값',
    foodType: '식품유형 기본값',
    licenseNo: '허가번호 기본값',
  };

  const nextValue = trimText(value);
  if (!defaultsMeta[fieldKey] || !nextValue) {
    return [];
  }

  if (trimText(state.store.masters.defaults[fieldKey]) === nextValue) {
    return [];
  }

  return [
    createMasterSyncOperation({
      action: 'update',
      title: defaultsMeta[fieldKey],
      description: `"${nextValue}" 값으로 기본 프로필을 수정합니다.`,
      apply() {
        state.store.masters.defaults[fieldKey] = nextValue;
        return true;
      },
    }),
  ];
}

function buildItemNameSyncOperation(label) {
  const standardName = trimText(label.fields.itemName);
  const sourceProductName = getLabelSourceProductName(label);
  const labelType = trimText(label.fields.labelType) || detectLabelType(sourceProductName);

  if (!standardName || !sourceProductName || !labelType) {
    return [];
  }

  const existing = state.store.masters.itemNames.find(
    (row) => trimText(row.type) === labelType && trimText(row.keyword) === sourceProductName
  );

  if (existing && trimText(existing.standardName) === standardName) {
    return [];
  }

  return [
    createMasterSyncOperation({
      action: existing ? 'update' : 'add',
      title: '품명 사전',
      description: `"${sourceProductName}" 상품명을 "${standardName}" 품명으로 ${existing ? '수정' : '추가'}합니다.`,
      apply() {
        const row = existing || { id: safeId('mst-itemNames') };
        row.type = labelType;
        row.keyword = sourceProductName;
        row.standardName = standardName;
        if (!existing) {
          state.store.masters.itemNames.push(row);
        }
        return true;
      },
    }),
  ];
}

function buildUsageSyncOperation(label) {
  const value = trimText(label.fields.usage);
  if (!value) {
    return [];
  }

  const existing = state.store.masters.usages.find((row) => trimText(row.value) === value);
  if (existing) {
    return [];
  }

  return [
    createMasterSyncOperation({
      action: 'add',
      title: '용도 사전',
      description: `"${value}" 용도값을 관리 데이터에 추가합니다.`,
      apply() {
        state.store.masters.usages.push({
          id: safeId('mst-usages'),
          value,
        });
        return true;
      },
    }),
  ];
}

function buildSpecSyncOperation(label) {
  const value = trimText(label.fields.spec);
  const labelType = trimText(label.fields.labelType);
  if (!value || !labelType) {
    return [];
  }

  const existing = state.store.masters.specs.find(
    (row) => trimText(row.type) === labelType && trimText(row.value) === value
  );
  if (existing) {
    return [];
  }

  return [
    createMasterSyncOperation({
      action: 'add',
      title: '규격 사전',
      description: `${labelType} 분류에 "${value}" 규격을 추가합니다.`,
      apply() {
        state.store.masters.specs.push({
          id: safeId('mst-specs'),
          type: labelType,
          value,
        });
        return true;
      },
    }),
  ];
}

function resolveProductReportMasterRow(label, fieldKey, previousValue) {
  const itemName = trimText(label.fields.itemName);
  const reportNo = trimText(label.fields.reportNo);
  const rows = getProductReportCandidates(itemName);
  const exact = reportNo ? rows.find((row) => trimText(row.reportNo) === reportNo) : null;
  const previous =
    fieldKey === 'reportNo' && trimText(previousValue)
      ? rows.find((row) => trimText(row.reportNo) === trimText(previousValue))
      : null;

  return exact || previous || (rows.length === 1 ? rows[0] : null);
}

function buildProductReportSyncOperation(label, fieldKey, previousValue) {
  const itemName = trimText(label.fields.itemName);
  const reportNo = trimText(label.fields.reportNo);
  const ingredients = trimText(label.fields.ingredients);
  const itemType = trimText(label.fields.productType);
  const productName = getLabelSourceProductName(label);

  if (!itemName || !(reportNo || ingredients || itemType)) {
    return [];
  }

  const existing = resolveProductReportMasterRow(label, fieldKey, previousValue);

  if (
    existing
    && trimText(existing.itemName) === itemName
    && trimText(existing.reportNo) === reportNo
    && trimText(existing.ingredients) === ingredients
    && trimText(existing.itemType) === itemType
    && trimText(existing.productName) === productName
  ) {
    return [];
  }

  return [
    createMasterSyncOperation({
      action: existing ? 'update' : 'add',
      title: '품목보고번호',
      description: `"${itemName}" 품명 기준 제품 정보를 ${existing ? '수정' : '추가'}합니다.`,
      apply() {
        const row = existing || { id: safeId('mst-productReports') };
        row.itemName = itemName;
        row.productName = productName;
        row.reportNo = reportNo;
        row.itemType = itemType;
        row.ingredients = ingredients;
        row.declaredAt = row.declaredAt || '';
        row.stoppedAt = row.stoppedAt || '';
        row.shelfLifeText = row.shelfLifeText || '';
        if (!existing) {
          state.store.masters.productReports.push(row);
        }
        return true;
      },
    }),
  ];
}

function resolveTraceabilityMasterRow(label, fieldKey, previousValue) {
  const itemName = trimText(label.fields.itemName);
  const traceNo = trimText(label.fields.traceNo);
  const rows = getTraceabilityCandidates(itemName, getRequiredTraceabilityKg(label));
  const exact = traceNo ? rows.find((row) => trimText(row.traceNo) === traceNo) : null;
  const previous =
    fieldKey === 'traceNo' && trimText(previousValue)
      ? rows.find((row) => trimText(row.traceNo) === trimText(previousValue))
      : null;

  return exact || previous || (rows.length === 1 ? rows[0] : null);
}

function buildTraceabilitySyncOperation(label, fieldKey, previousValue) {
  const itemName = trimText(label.fields.itemName);
  const traceNo = trimText(label.fields.traceNo);
  const slaughterhouse = trimText(label.fields.slaughterhouse);
  const availableKg = getRequiredTraceabilityKg(label);

  if (!itemName || !(traceNo || slaughterhouse)) {
    return [];
  }

  const existing = resolveTraceabilityMasterRow(label, fieldKey, previousValue);

  if (
    existing
    && trimText(existing.itemName) === itemName
    && trimText(existing.traceNo) === traceNo
    && trimText(existing.slaughterhouse) === slaughterhouse
    && parseNumber(existing.availableKg) === availableKg
  ) {
    return [];
  }

  return [
    createMasterSyncOperation({
      action: existing ? 'update' : 'add',
      title: '이력번호',
      description: `"${itemName}" 품명 기준 이력 정보를 ${existing ? '수정' : '추가'}합니다.`,
      apply() {
        const row = existing || { id: safeId('mst-traceability') };
        row.itemName = itemName;
        row.traceNo = traceNo;
        row.slaughterhouse = slaughterhouse;
        row.availableKg = availableKg;
        row.slaughterDate = row.slaughterDate || '';
        if (!existing) {
          state.store.masters.traceability.push(row);
        }
        return true;
      },
    }),
  ];
}

function buildMasterSyncOperations(label, fieldKey, previousValue) {
  if (!label) {
    return [];
  }

  switch (fieldKey) {
    case 'manufacturer':
    case 'seller':
    case 'foodType':
    case 'licenseNo':
      return buildDefaultsSyncOperation(fieldKey, label.fields[fieldKey]);
    case 'itemName':
      return buildItemNameSyncOperation(label);
    case 'usage':
      return buildUsageSyncOperation(label);
    case 'spec':
      return buildSpecSyncOperation(label);
    case 'reportNo':
    case 'ingredients':
      return buildProductReportSyncOperation(label, fieldKey, previousValue);
    case 'traceNo':
    case 'slaughterhouse':
      return buildTraceabilitySyncOperation(label, fieldKey, previousValue);
    default:
      return [];
  }
}

function openMasterSyncModal(operations) {
  if (!refs.masterSyncModal || !operations.length) {
    return Promise.resolve(false);
  }

  if (state.pendingMasterSync?.resolve) {
    state.pendingMasterSync.resolve(false);
  }

  refs.masterSyncMessage.textContent =
    operations.length > 1
      ? '직접 입력한 값을 관리 데이터에도 함께 반영할까요?'
      : '직접 입력한 값을 관리 데이터에 반영할까요?';
  refs.masterSyncList.innerHTML = operations
    .map((operation) => {
      const actionText = operation.action === 'update' ? '수정' : '추가';
      return `
        <article class="master-sync-item">
          <div class="master-sync-item-head">
            <span class="master-sync-badge master-sync-badge-${operation.action}">${actionText}</span>
            <strong>${escapeHtml(operation.title)}</strong>
          </div>
          <p>${escapeHtml(operation.description)}</p>
        </article>
      `;
    })
    .join('');

  refs.masterSyncModal.hidden = false;
  refs.masterSyncConfirm.focus();

  return new Promise((resolve) => {
    state.pendingMasterSync = { operations, resolve };
  });
}

function closeMasterSyncModal(confirmed) {
  if (refs.masterSyncModal) {
    refs.masterSyncModal.hidden = true;
  }
  if (refs.masterSyncMessage) {
    refs.masterSyncMessage.textContent = '';
  }
  if (refs.masterSyncList) {
    refs.masterSyncList.innerHTML = '';
  }

  const pending = state.pendingMasterSync;
  state.pendingMasterSync = null;
  pending?.resolve?.(Boolean(confirmed));
}

function applyMasterSyncOperations(operations = []) {
  return operations.reduce((count, operation) => {
    if (typeof operation.apply !== 'function') {
      return count;
    }

    return operation.apply() ? count + 1 : count;
  }, 0);
}

function getVisibleImports() {
  const searchText = state.importTable.search.trim().toLowerCase();
  const sortKey = state.importTable.sort;

  return [...state.store.imports]
    .filter((row) => {
      if (!searchText) {
        return true;
      }

      const searchable = `${row.restaurant} ${row.productName} ${row.note || ''}`.toLowerCase();
      return searchable.includes(searchText);
    })
    .filter((row) => {
      if (!state.importTable.warningsOnly) {
        return true;
      }
      const warningCount = state.importDiagnostics[row.id]?.warnings?.length || 0;
      return warningCount > 0;
    })
    .sort((a, b) => compareImportRows(a, b, sortKey));
}

function compareImportRows(a, b, sortKey) {
  switch (sortKey) {
    case 'supply-desc':
      return parseComparableDate(b.supplyDate) - parseComparableDate(a.supplyDate);
    case 'supply-asc':
      return parseComparableDate(a.supplyDate) - parseComparableDate(b.supplyDate);
    case 'qty-desc':
      return parseNumber(b.quantity) - parseNumber(a.quantity);
    case 'qty-asc':
      return parseNumber(a.quantity) - parseNumber(b.quantity);
    case 'restaurant-asc':
      return String(a.restaurant || '').localeCompare(String(b.restaurant || ''), 'ko');
    case 'modified-desc':
    default:
      return parseComparableDateTime(b.modifiedAt) - parseComparableDateTime(a.modifiedAt);
  }
}

function parseComparableDate(value) {
  const parsed = parseDate(value);
  return parsed ? parsed.getTime() : 0;
}

function parseComparableDateTime(value) {
  if (!value) {
    return 0;
  }
  const normalized = String(value).replace(' ', 'T');
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}

function renderEverything() {
  refs.importSearch.value = state.importTable.search;
  refs.importSort.value = state.importTable.sort;
  refs.importWarningOnly.checked = state.importTable.warningsOnly;

  renderWorkspaceHeader();
  renderHeaderMetrics();
  renderUploadFileSelection();
  renderUploadSummary();
  renderImportsTable();
  renderMasterMenu();
  renderDefaultsProfile();
  renderMasterTables();
  renderLabelsList();
  renderLabelEditor();
  renderPrintArea();
}

function renderFlowStepper() {
  if (!refs.flowStepper) {
    return;
  }

  const activeStep = FLOW_STEPS.find((step) => step.tab === state.activeTab) || FLOW_STEPS[0];
  const activeStepState = getFlowStepState(state.activeTab);
  const warningLabels = state.store.labels.filter((label) => label.warnings.length > 0).length;
  const warningImports = state.store.imports.filter(
    (row) => (state.importDiagnostics[row.id]?.warnings || []).length > 0
  ).length;
  const requiredMasterCount = MASTER_REQUIRED_KEYS.filter(
    (key) => Array.isArray(state.store.masters[key]) && state.store.masters[key].length > 0
  ).length;
  const warningTone = warningLabels > 0 || warningImports > 0 ? 'warn' : 'done';
  const masterTone =
    requiredMasterCount === MASTER_REQUIRED_KEYS.length
      ? 'done'
      : requiredMasterCount > 0
        ? 'warn'
        : 'pending';

  const items = [
    {
      label: '현재 작업',
      value: activeStep.title,
      meta: activeStepState.meta,
      tone: activeStepState.tone,
    },
    {
      label: '경고 현황',
      value: warningLabels > 0 || warningImports > 0 ? `라벨 ${warningLabels}건 · ${warningImports}행` : '현재 경고 없음',
      meta: warningLabels > 0 || warningImports > 0 ? '인쇄 전 검수 또는 라벨 수정 필요' : '바로 다음 작업 진행 가능',
      tone: warningTone,
    },
    {
      label: '핵심 마스터',
      value: `${requiredMasterCount}/${MASTER_REQUIRED_KEYS.length} 준비`,
      meta:
        requiredMasterCount === MASTER_REQUIRED_KEYS.length
          ? '자동 바인딩 기준 데이터 준비 완료'
          : '포장단위, 품명, 품목보고번호, 이력번호 확인',
      tone: masterTone,
    },
  ];

  refs.flowStepper.innerHTML = `
    <div class="sidebar-status-list">
      ${items
        .map(
          (item) => `
            <div class="status-row status-row-${item.tone}">
              <span class="status-label">${escapeHtml(item.label)}</span>
              <strong class="status-value">${escapeHtml(item.value)}</strong>
              <span class="status-meta">${escapeHtml(item.meta)}</span>
            </div>
          `
        )
        .join('')}
    </div>
  `;
}

function getFlowStepState(tabName) {
  const importsCount = state.store.imports.length;
  const labelsCount = state.store.labels.length;
  const warningLabels = state.store.labels.filter((label) => label.warnings.length > 0).length;
  const requiredMasterCount = MASTER_REQUIRED_KEYS.filter(
    (key) => Array.isArray(state.store.masters[key]) && state.store.masters[key].length > 0
  ).length;
  const lastPrint = state.store.printAudit[state.store.printAudit.length - 1];

  if (tabName === 'upload') {
    return {
      tone: importsCount > 0 ? 'done' : 'pending',
      meta: importsCount > 0 ? `추출 ${importsCount}건` : '추출 데이터 없음',
    };
  }

  if (tabName === 'masters') {
    if (requiredMasterCount === MASTER_REQUIRED_KEYS.length) {
      return { tone: 'done', meta: `핵심 마스터 ${requiredMasterCount}/${MASTER_REQUIRED_KEYS.length}` };
    }
    if (requiredMasterCount > 0) {
      return { tone: 'warn', meta: `핵심 마스터 ${requiredMasterCount}/${MASTER_REQUIRED_KEYS.length}` };
    }
    return { tone: 'pending', meta: '핵심 마스터 미등록' };
  }

  if (tabName === 'labels') {
    if (!labelsCount) {
      return { tone: 'pending', meta: '라벨 없음' };
    }
    if (warningLabels > 0) {
      return { tone: 'warn', meta: `경고 라벨 ${warningLabels}건` };
    }
    return { tone: 'done', meta: `라벨 ${labelsCount}장` };
  }

  if (!labelsCount) {
    return { tone: 'pending', meta: '인쇄 대상 없음' };
  }
  if (warningLabels > 0) {
    return { tone: 'warn', meta: '인쇄 전 검수 필요' };
  }
  if (lastPrint?.printedAt) {
    return { tone: 'done', meta: `최근 인쇄 ${formatDateTimeShort(lastPrint.printedAt)}` };
  }
  return { tone: 'pending', meta: '인쇄 이력 없음' };
}

function formatDateTimeShort(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return '-';
  }

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  return `${month}-${day} ${hh}:${mm}`;
}

function getWorkspaceMeta() {
  if (state.activeTab === 'masters') {
    const baseMeta = WORKSPACE_META.masters;
    const activeMasterTitle =
      state.activeMasterTab === 'defaults'
        ? '기본값 프로필'
        : MASTER_CONFIGS.find((config) => config.key === state.activeMasterTab)?.title || '관리 데이터';

    return {
      eyebrow: baseMeta.eyebrow,
      title: `${baseMeta.title} · ${activeMasterTitle}`,
      description: MASTER_TAB_DESCRIPTIONS[state.activeMasterTab] || baseMeta.description,
    };
  }

  return WORKSPACE_META[state.activeTab] || WORKSPACE_META.upload;
}

function renderWorkspaceHeader() {
  const meta = getWorkspaceMeta();
  refs.workspaceEyebrow.textContent = meta.eyebrow;
  refs.workspaceTitle.textContent = meta.title;
  refs.workspaceDescription.textContent = meta.description || '';
  refs.workspaceDescription.hidden = !meta.description;
  updateLayoutOffsets();
}

function renderUploadSummary() {
  if (!refs.uploadSummary) {
    return;
  }

  if (!state.parseSummary) {
    refs.uploadSummary.textContent = state.store.imports.length
      ? `저장된 추출 데이터 ${state.store.imports.length}행`
      : '업로드된 파일이 없습니다.';
    return;
  }

  refs.uploadSummary.textContent = `파일 ${state.parseSummary.fileName} | 총 ${state.parseSummary.total}행 / 유효 ${state.parseSummary.valid}행 / 제외 ${state.parseSummary.excluded}행`;
}

function renderUploadFileSelection() {
  const fileName = refs.fileInput.files?.[0]?.name || '';
  const text = fileName || '선택된 파일 없음';

  if (refs.filePickerName) {
    refs.filePickerName.textContent = text;
    refs.filePickerName.title = text;
    refs.filePickerName.classList.toggle('is-empty', !fileName);
  }

  refs.filePicker?.classList.toggle('has-file', Boolean(fileName));
}

function renderImportsTable() {
  if (!state.store.imports.length) {
    refs.importsTableBody.innerHTML =
      '<tr><td colspan="9" class="empty-box">추출된 데이터가 없습니다.</td></tr>';
    renderImportSelectionStats([]);
    return;
  }

  const visibleRows = getVisibleImports();
  if (!visibleRows.length) {
    refs.importsTableBody.innerHTML =
      '<tr><td colspan="9" class="empty-box">현재 검색/필터 조건에 맞는 데이터가 없습니다.</td></tr>';
    renderImportSelectionStats([]);
    return;
  }

  refs.importsTableBody.innerHTML = visibleRows
    .map((row) => {
      const checked = state.selectedImportIds.has(row.id) ? 'checked' : '';
      const warnings = state.importDiagnostics[row.id]?.warnings || [];
      const warningCount = warnings.length;
      const warningBadge = warningCount
        ? `<span class="warn-badge" title="${escapeHtml(warnings.join(', '))}">경고 ${warningCount}</span>`
        : '-';
      const warningRowClass = warningCount ? 'warning-row' : '';
      return `
        <tr class="${warningRowClass}">
          <td><input type="checkbox" data-import-id="${escapeHtml(row.id)}" ${checked} /></td>
          <td>${warningBadge}</td>
          <td>${escapeHtml(row.supplyDate)}</td>
          <td>${escapeHtml(row.restaurant)}</td>
          <td>${escapeHtml(row.productName)}</td>
          <td>${escapeHtml(row.unit)}</td>
          <td>${escapeHtml(String(row.quantity))}</td>
          <td>${escapeHtml(row.note || '')}</td>
          <td>${escapeHtml(row.modifiedAt || '')}</td>
        </tr>
      `;
    })
    .join('');
  renderImportSelectionStats(visibleRows);
}

function renderImportSelectionStats(visibleRows) {
  const totalSelected = state.store.imports.filter((row) => state.selectedImportIds.has(row.id)).length;
  const visibleSelected = visibleRows.filter((row) => state.selectedImportIds.has(row.id)).length;
  const visibleWarning = visibleRows.filter((row) => (state.importDiagnostics[row.id]?.warnings || []).length > 0).length;

  if (refs.importVisibleCount) {
    refs.importVisibleCount.textContent = `표시 ${visibleRows.length}건`;
  }
  if (refs.importSelectedCount) {
    refs.importSelectedCount.textContent = `선택 ${visibleSelected}건 (전체 ${totalSelected}건)`;
  }
  if (refs.importWarningCount) {
    refs.importWarningCount.textContent = `경고 ${visibleWarning}건`;
  }
  if (state.activeTab === 'upload') {
    renderHeaderMetrics();
  }
}

function setHeaderMetricItems(items) {
  const slots = [
    { label: refs.metricImportsLabel, value: refs.metricImports },
    { label: refs.metricLabelsLabel, value: refs.metricLabels },
    { label: refs.metricWarningsLabel, value: refs.metricWarnings },
    { label: refs.metricStageLabel, value: refs.metricStage },
  ];

  items.forEach((item, index) => {
    const slot = slots[index];
    if (!slot) {
      return;
    }

    if (slot.label) {
      slot.label.textContent = item.label;
      slot.label.title = item.label;
    }

    if (slot.value) {
      slot.value.textContent = item.value;
      slot.value.title = item.value;
    }
  });
}

function renderHeaderMetrics() {
  const importsCount = state.store.imports.length;
  const labelsCount = state.store.labels.length;
  const warningLabels = state.store.labels.filter((label) => label.warnings.length > 0).length;
  const warningImports = state.store.imports.filter(
    (row) => (state.importDiagnostics[row.id]?.warnings || []).length > 0
  ).length;
  const activeStep = FLOW_STEPS.find((step) => step.tab === state.activeTab);
  const visibleRows = state.activeTab === 'upload' ? getVisibleImports() : [];
  const selectedTotal = state.store.imports.filter((row) => state.selectedImportIds.has(row.id)).length;
  const visibleSelected = visibleRows.filter((row) => state.selectedImportIds.has(row.id)).length;
  const visibleWarning = visibleRows.filter((row) => (state.importDiagnostics[row.id]?.warnings || []).length > 0).length;
  const rawFileStatus = state.parseSummary?.fileName
    || refs.fileInput.files?.[0]?.name
    || (importsCount ? '저장 데이터' : '미선택');
  const fileStatus = rawFileStatus.length > 16 ? `${rawFileStatus.slice(0, 15)}…` : rawFileStatus;

  if (state.activeTab === 'upload') {
    setHeaderMetricItems([
      { label: '파일', value: fileStatus },
      { label: '표시', value: `${visibleRows.length}건` },
      { label: '선택', value: selectedTotal ? `${visibleSelected}/${selectedTotal}건` : '0건' },
      { label: '경고', value: `${visibleWarning}건` },
    ]);
    renderFlowStepper();
    return;
  }

  setHeaderMetricItems([
    { label: '추출 데이터', value: `${importsCount}건` },
    { label: '생성 라벨', value: `${labelsCount}장` },
    { label: '경고 현황', value: `${warningLabels}건 · ${warningImports}행` },
    { label: '현재 단계', value: activeStep?.title || '엑셀 업로드' },
  ]);
  renderFlowStepper();
}

function renderDefaultsProfile() {
  refs.defaultManufacturer.value = state.store.masters.defaults.manufacturer || '';
  refs.defaultSeller.value = state.store.masters.defaults.seller || '';
  refs.defaultFoodType.value = state.store.masters.defaults.foodType || '';
  refs.defaultLicenseNo.value = state.store.masters.defaults.licenseNo || '';
}

function renderMasterMenu() {
  renderWorkspaceHeader();
  refs.masterMenu.innerHTML = MASTER_MENU_TABS.map((tab) => {
    const isActive = state.activeMasterTab === tab.key;
    const activeClass = isActive ? 'active' : '';
    const ariaSelected = isActive ? 'true' : 'false';
    return `
      <button
        type="button"
        class="master-menu-button ${activeClass}"
        data-master-tab="${tab.key}"
        role="tab"
        aria-selected="${ariaSelected}"
      >
        ${escapeHtml(tab.title)}
      </button>
    `;
  }).join('');
}

function renderMasterTables() {
  const isDefaultsTab = state.activeMasterTab === 'defaults';
  refs.masterDefaultsPanel.hidden = !isDefaultsTab;

  if (isDefaultsTab) {
    refs.masterTables.innerHTML = '';
    return;
  }

  const config = MASTER_CONFIGS.find((item) => item.key === state.activeMasterTab) || MASTER_CONFIGS[0];
  if (state.activeMasterTab !== config.key) {
    state.activeMasterTab = config.key;
    renderMasterMenu();
  }

  const rows = state.store.masters[config.key];
  const header = config.columns.map((column) => `<th>${column.label}</th>`).join('');
  const body = rows
    .map((row) => {
      const cells = config.columns
        .map((column) => {
          return `<td>${renderMasterCell(config.key, row, column)}</td>`;
        })
        .join('');

      return `
        <tr>
          ${cells}
          <td>
            <button data-action="delete-master-row" data-master-key="${config.key}" data-row-id="${row.id}" class="danger">삭제</button>
          </td>
        </tr>
      `;
    })
    .join('');

  const bodyHtml =
    body || `<tr><td colspan="${config.columns.length + 1}" class="empty-box">등록된 데이터가 없습니다.</td></tr>`;

  refs.masterTables.innerHTML = `
    <div class="panel-card master-sheet-card">
      <div class="master-title">
        <div class="master-heading">
          <h3>${config.title}</h3>
          <span class="master-row-count">${rows.length}행</span>
        </div>
        <div class="master-actions">
          <button data-action="add-master-row" data-master-key="${config.key}" class="secondary">행 추가</button>
          <button data-action="upload-master-excel" data-master-key="${config.key}">엑셀 업로드</button>
          <button data-action="download-master-excel" data-master-key="${config.key}" class="secondary">엑셀 다운로드</button>
          <input
            type="file"
            data-action="upload-master-excel-input"
            data-master-key="${config.key}"
            accept=".xlsx,.xls"
            hidden
          />
        </div>
      </div>
      <div class="table-wrap master-table-wrap master-table-wrap-${config.key}">
        <table class="master-table master-table-${config.key}">
          <thead>
            <tr>
              ${header}
              <th>관리</th>
            </tr>
          </thead>
          <tbody>${bodyHtml}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderMasterCell(masterKey, row, column) {
  const value = row[column.key] ?? '';

  if (column.type === 'select') {
    const options = column.options
      .map((option) => {
        const selected = option === value ? 'selected' : '';
        return `<option ${selected} value="${escapeHtml(option)}">${escapeHtml(option)}</option>`;
      })
      .join('');

    return `<select data-master-key="${masterKey}" data-row-id="${row.id}" data-column-key="${column.key}">${options}</select>`;
  }

  const inputType = column.type === 'number' ? 'number' : 'text';
  const step = column.type === 'number' ? 'step="0.001"' : '';

  return `<input ${step} type="${inputType}" value="${escapeHtml(String(value))}" data-master-key="${masterKey}" data-row-id="${row.id}" data-column-key="${column.key}" />`;
}

function addMasterRow(masterKey) {
  const config = MASTER_CONFIGS.find((item) => item.key === masterKey);
  if (!config) return;

  const row = { id: safeId(`mst-${masterKey}`) };
  config.columns.forEach((column) => {
    if (column.type === 'select') {
      row[column.key] = column.options[0];
    } else if (column.type === 'number') {
      row[column.key] = 0;
    } else {
      row[column.key] = '';
    }
  });

  state.store.masters[masterKey].push(row);
  refreshImportDiagnostics();
  renderImportsTable();
  renderHeaderMetrics();
  renderMasterTables();
  queueSave();
}

function deleteMasterRow(masterKey, rowId) {
  const rows = state.store.masters[masterKey];
  if (!Array.isArray(rows)) {
    return;
  }

  state.store.masters[masterKey] = rows.filter((row) => row.id !== rowId);
  refreshImportDiagnostics();
  renderImportsTable();
  renderHeaderMetrics();
  renderMasterTables();
  queueSave();
}

function buildLabelGroupSignature(label) {
  const normalizedFields = Object.keys(label.fields || {})
    .sort()
    .map((key) => [key, label.fields[key] ?? '']);
  const normalizedWarnings = [...new Set(label.warnings || [])].sort();
  return JSON.stringify({
    fields: normalizedFields,
    warnings: normalizedWarnings,
  });
}

function collectLabelGroups(labels = state.store.labels) {
  const groups = [];
  const groupMap = new Map();

  labels.forEach((label) => {
    const signature = buildLabelGroupSignature(label);
    let group = groupMap.get(signature);
    if (!group) {
      group = {
        signature,
        representative: label,
        labelIds: [],
        count: 0,
        warnings: [...new Set(label.warnings || [])],
      };
      groupMap.set(signature, group);
      groups.push(group);
    }

    group.labelIds.push(label.id);
    group.count += 1;
  });

  return groups;
}

function collectSourceLabelGroups(labels = state.store.labels) {
  const groups = [];
  const groupMap = new Map();

  labels.forEach((label) => {
    const groupKey = label.sourceRowId || label.id;
    let group = groupMap.get(groupKey);

    if (!group) {
      group = {
        sourceRowId: label.sourceRowId,
        representative: label,
        labels: [],
        warningCount: 0,
      };
      groupMap.set(groupKey, group);
      groups.push(group);
    }

    group.labels.push(label);
    if (label.warnings.length > 0) {
      group.warningCount += 1;
    }
  });

  groups.forEach((group) => {
    group.labels.sort((left, right) => {
      const splitDiff = (left.splitIndex || 0) - (right.splitIndex || 0);
      if (splitDiff !== 0) {
        return splitDiff;
      }

      return String(left.id).localeCompare(String(right.id), 'ko');
    });
  });

  return groups;
}

function getImportRowById(rowId) {
  return state.store.imports.find((row) => row.id === rowId) || null;
}

function getLabelSourceContext(label) {
  const sourceRow = getImportRowById(label.sourceRowId);
  const sameSourceCount = state.store.labels.filter((item) => item.sourceRowId === label.sourceRowId).length;
  const sourceIndexText = sourceRow?.rawIndex ? `원본 ${sourceRow.rawIndex}행` : '원본 데이터';
  const restaurant = sourceRow?.restaurant || label.fields.deliveryPlace || '-';
  const productName = sourceRow?.productName || label.fields.sourceProductName || label.fields.itemName || '-';
  const supplyDate = sourceRow?.supplyDate || label.fields.deliveryDate || '-';
  const quantityText = sourceRow
    ? `${formatWeight(sourceRow.quantity)} ${sourceRow.unit || ''}`.trim()
    : `${label.fields.totalWeight || '-'}kg`;
  const note = sourceRow?.note || label.fields.note || '';

  return {
    sourceRow,
    sameSourceCount,
    sourceIndexText,
    restaurant,
    productName,
    supplyDate,
    quantityText,
    note,
  };
}

function renderLabelsList() {
  if (!state.store.labels.length) {
    refs.labelsList.innerHTML = '<li class="empty-box">생성된 라벨이 없습니다.</li>';
    return;
  }

  const selectedLabelId = getSelectedLabel()?.id || null;

  refs.labelsList.innerHTML = collectSourceLabelGroups()
    .map((group) => {
      const sourceContext = getLabelSourceContext(group.representative);
      const activeGroupClass = group.labels.some((label) => label.id === selectedLabelId) ? 'active-group' : '';
      const warningSummary = group.warningCount
        ? `<span class="label-group-warning">경고 ${group.warningCount}장</span>`
        : '';
      const cardsHtml = collectLabelGroups(group.labels)
        .map((labelGroup) => {
          const label = labelGroup.representative;
          const activeClass = labelGroup.labelIds.includes(selectedLabelId) ? 'active' : '';
          const warningClass = labelGroup.warnings.length ? 'has-warning' : '';
          const visibleLabelId = labelGroup.labelIds.includes(selectedLabelId) ? selectedLabelId : label.id;
          const countBadge = labelGroup.count > 1
            ? `<span class="label-count-badge">${labelGroup.count}장</span>`
            : '';
          const sourceProductLine =
            sourceContext.productName && sourceContext.productName !== (label.fields.itemName || '')
              ? `<div class="label-source-meta">원본 상품: ${escapeHtml(sourceContext.productName)}</div>`
              : '';

          return `
            <button
              type="button"
              data-label-id="${visibleLabelId}"
              class="label-list-card ${[activeClass, warningClass].filter(Boolean).join(' ')}"
            >
              <div class="label-list-row">
                <strong>${escapeHtml(label.fields.labelType)}</strong>
                <div class="label-card-badges">${countBadge}</div>
              </div>
              <div class="label-card-title">${escapeHtml(label.fields.itemName || '(미매핑)')}</div>
              ${sourceProductLine}
              <div class="label-card-meta">${escapeHtml(label.fields.weightDisplay)}</div>
              <div class="label-card-meta">${escapeHtml(label.fields.deliveryDate)}</div>
            </button>
          `;
        })
        .join('');

      return `
        <li class="label-source-group ${activeGroupClass}">
          <div class="label-source-group-head">
            <div>
              <div class="label-source-group-title">
                <span class="label-source-chip">${escapeHtml(sourceContext.sourceIndexText)}</span>
                <strong>${escapeHtml(sourceContext.restaurant)}</strong>
              </div>
              <div class="label-source-group-detail">
                ${escapeHtml(sourceContext.productName)} · ${escapeHtml(sourceContext.supplyDate)}
              </div>
            </div>
            <div class="label-source-group-summary">
              ${warningSummary}
              <span class="label-group-count">${group.labels.length}장</span>
            </div>
          </div>
          <div class="label-source-stack">${cardsHtml}</div>
        </li>
      `;
    })
    .join('');
}

function renderLabelEditor() {
  renderLabelSourcePanel();
  renderLabelForm();
  renderLabelWarningPanel();
}

function renderLabelSourcePanel() {
  const label = getSelectedLabel();
  if (!label) {
    refs.labelSourcePanel.innerHTML = '<div class="empty-box">라벨을 선택하면 원본 데이터를 함께 표시합니다.</div>';
    return;
  }

  const source = getLabelSourceContext(label);
  const noteRow = source.note
    ? `
      <div class="label-source-note-inline">
        <span>비고</span>
        <strong>${escapeHtml(source.note)}</strong>
      </div>
    `
    : '';

  refs.labelSourcePanel.innerHTML = `
    <div class="label-source-head">
      <div>
        <p class="panel-kicker">원본 주문 데이터</p>
      </div>
      <span class="label-source-summary">${escapeHtml(label.fields.labelType)} 라벨</span>
    </div>
    <div class="label-source-grid">
      <div class="label-source-card label-source-card-restaurant">
        <span>식당</span>
        <strong>${escapeHtml(source.restaurant)}</strong>
      </div>
      <div class="label-source-card label-source-card-date">
        <span>납품일자</span>
        <strong>${escapeHtml(source.supplyDate)}</strong>
      </div>
      <div class="label-source-card label-source-card-product">
        <span>원본 상품명</span>
        <strong>${escapeHtml(source.productName)}</strong>
      </div>
      <div class="label-source-card label-source-card-quantity">
        <span>원본 수량</span>
        <strong>${escapeHtml(source.quantityText)}</strong>
      </div>
    </div>
    ${noteRow}
  `;
}

function renderLabelForm() {
  const label = getSelectedLabel();
  if (!label) {
    refs.labelForm.innerHTML = '<div class="empty-box">왼쪽 목록에서 라벨을 선택해 주세요.</div>';
    return;
  }

  const fields = label.fields;
  const warningFieldKeys = new Set(
    label.warnings
      .map((warning) => WARNING_FIELD_GUIDES[warning]?.fieldKey)
      .filter((fieldKey) => Boolean(fieldKey))
  );

  const formConfig = [
    { section: '라벨 기본', key: 'labelType', label: '라벨 구분', type: 'select', options: ['육류', '어류'] },
    { section: '라벨 기본', key: 'deliveryPlace', label: '납품처' },
    { section: '라벨 기본', key: 'itemName', label: '품명' },
    {
      section: '라벨 기본',
      key: fields.labelType === '어류' ? 'deliveryDateWithWeekday' : 'deliveryDate',
      label: fields.labelType === '어류' ? '납품일(요일)' : '납품일자',
    },
    { section: '라벨 기본', key: 'weightDisplay', label: '중량 표시' },
    { section: '유통/보관', key: 'manufactureDate', label: fields.labelType === '어류' ? '제조년월일' : '제조일자' },
    { section: '유통/보관', key: 'origin', label: '원산지' },
    { section: '유통/보관', key: 'packagingType', label: '포장형태', type: 'select', options: ['일반포장', '진공포장'] },
    { section: '유통/보관', key: 'shelfLifeDate', label: '소비기한' },
    { section: '유통/보관', key: 'usage', label: '용도' },
    { section: '유통/보관', key: 'spec', label: '규격' },
    { section: '유통/보관', key: 'storageType', label: '구분(냉장/냉동)' },
    { section: '유통/보관', key: 'storageMethod', label: '보관방법' },
    { section: '원료/이력', key: 'ingredients', label: '원재료 및 함량' },
    { section: '원료/이력', key: 'reportNo', label: '품목제조보고번호' },
    { section: '원료/이력', key: 'slaughterhouse', label: '도축장명' },
    { section: '원료/이력', key: 'traceNo', label: '이력번호' },
    { section: '사업자 정보', key: 'manufacturer', label: '제조원', wide: true },
    { section: '사업자 정보', key: 'seller', label: '판매원' },
    { section: '사업자 정보', key: 'foodType', label: '식품유형' },
    { section: '사업자 정보', key: 'licenseNo', label: '허가번호' },
    { section: '기타', key: 'fixedNotice', label: '고정 안내문구', type: 'textarea', wide: true },
    { section: '기타', key: 'note', label: '비고', type: 'textarea' },
  ];

  const sectionOrder = [];
  const sectionMap = new Map();

  formConfig.forEach((field) => {
    if (!sectionMap.has(field.section)) {
      sectionMap.set(field.section, []);
      sectionOrder.push(field.section);
    }
    sectionMap.get(field.section).push(field);
  });

  refs.labelForm.innerHTML = sectionOrder
    .map((sectionTitle) => renderLabelSection(label, sectionTitle, sectionMap.get(sectionTitle), warningFieldKeys))
    .join('');
}

function renderLabelSection(label, sectionTitle, fields, warningFieldKeys) {
  const sectionClass = [
    sectionTitle === '유통/보관' ? 'section-storage' : '',
    sectionTitle === '원료/이력' ? 'section-traceability' : '',
  ]
    .filter(Boolean)
    .join(' ');
  const sectionFields = fields.map((field) => renderLabelField(label, field, warningFieldKeys)).join('');
  return `
    <section class="form-section-card ${sectionClass}">
      <div class="form-section-head">
        <div class="form-section-title">${escapeHtml(sectionTitle)}</div>
      </div>
      <div class="form-fields-grid">
        ${sectionFields}
      </div>
    </section>
  `;
}

function renderLabelField(label, field, warningFieldKeys) {
  const value = label.fields[field.key] || '';
  const isManual = Boolean(label.manualOverrides[field.key]);
  const badge = isManual ? '<span class="override-badge">수동수정</span>' : '';
  const warningClass = warningFieldKeys.has(field.key) ? 'field-warning' : '';
  const sizeClass = field.full ? 'full' : field.wide ? 'wide' : '';
  const blockClass = `field-block ${sizeClass} ${warningClass}`.trim();
  const textareaRows = field.key === 'fixedNotice' ? 5 : 3;
  const controlConfig = getFieldControlConfig(label, field);

  if (field.type === 'textarea') {
    return `
      <div class="${blockClass}" data-field-key="${field.key}">
        <label>${field.label}${badge}</label>
        <textarea name="${field.key}" rows="${textareaRows}">${escapeHtml(value)}</textarea>
      </div>
    `;
  }

  if (field.type === 'select') {
    const options = field.options
      .map((option) => {
        const selected = option === value ? 'selected' : '';
        return `<option value="${escapeHtml(option)}" ${selected}>${escapeHtml(option)}</option>`;
      })
      .join('');

    return `
      <div class="${blockClass}" data-field-key="${field.key}">
        <label>${field.label}${badge}</label>
        <select name="${field.key}">${options}</select>
      </div>
    `;
  }

  if (controlConfig.mode === 'candidate') {
    const options = controlConfig.candidateOptions
      .map((option) => {
        const selected = option.value === controlConfig.selectedChoiceValue ? 'selected' : '';
        return `<option value="${escapeHtml(option.value)}" ${selected}>${escapeHtml(option.label)}</option>`;
      })
      .join('');
    const manualSelected = controlConfig.selectedChoiceValue === FIELD_CHOICE_MANUAL ? 'selected' : '';
    const placeholderSelected = !controlConfig.selectedChoiceValue ? 'selected' : '';
    const manualInput = controlConfig.showManualInput
      ? `<input type="text" name="${field.key}" value="${escapeHtml(value)}" placeholder="직접 입력" />`
      : '';

    return `
      <div class="${blockClass}" data-field-key="${field.key}">
        <label>${field.label}${badge}</label>
        <div class="field-choice-stack">
          <select name="${field.key}-choice" data-candidate-field="${field.key}" data-choice-mode="candidate">
            <option value="" ${placeholderSelected}>후보 선택</option>
            ${options}
            <option value="${FIELD_CHOICE_MANUAL}" ${manualSelected}>직접 입력</option>
          </select>
          ${manualInput}
        </div>
      </div>
    `;
  }

  return `
    <div class="${blockClass}" data-field-key="${field.key}">
      <label>${field.label}${badge}</label>
      <input type="text" name="${field.key}" value="${escapeHtml(value)}" />
    </div>
  `;
}

function renderLabelWarningPanel() {
  const label = getSelectedLabel();
  if (!label) {
    refs.labelWarningPanel.classList.remove('safe');
    refs.labelWarningPanel.innerHTML = '<div class="empty-box">라벨을 선택하면 경고 상태를 표시합니다.</div>';
    return;
  }

  const warnings = [...new Set(label.warnings)];
  const warningLabelIds = getWarningLabelIds();

  if (!warnings.length) {
    refs.labelWarningPanel.classList.add('safe');
    const hasAnyWarningLabel = warningLabelIds.length > 0;
    const actionButton = hasAnyWarningLabel
      ? '<button type="button" class="secondary" data-action="goto-next-warning">경고 라벨로 이동</button>'
      : '';
    refs.labelWarningPanel.innerHTML = `
      <div class="warning-panel-header">
        <strong>현재 라벨 경고 없음</strong>
        <div class="warning-panel-actions">
          ${actionButton}
          <span class="warning-count">0건</span>
        </div>
      </div>
    `;
    return;
  }

  refs.labelWarningPanel.classList.remove('safe');
  const warningItems = warnings
    .map((warning) => {
      const guide = WARNING_FIELD_GUIDES[warning]?.guide || '해당 필드를 확인해 값을 보완하세요.';
      const fieldKey = WARNING_FIELD_GUIDES[warning]?.fieldKey || '';
      const actionButton = fieldKey
        ? `<button type="button" class="secondary" data-warning-field="${fieldKey}">해결 위치</button>`
        : '';
      return `
        <li class="warning-item">
          <div class="warning-item-copy">
            <strong>${escapeHtml(warning)}</strong>
            <span>${escapeHtml(guide)}</span>
          </div>
          ${actionButton}
        </li>
      `;
    })
    .join('');

  const nextButton =
    warningLabelIds.length > 1
      ? '<button type="button" class="secondary" data-action="goto-next-warning">다음 경고 라벨</button>'
      : '';

  refs.labelWarningPanel.innerHTML = `
    <div class="warning-panel-header">
      <strong>현재 라벨 경고</strong>
      <div class="warning-panel-actions">
        ${nextButton}
        <span class="warning-count">${warnings.length}건</span>
      </div>
    </div>
    <ul class="warning-item-list">${warningItems}</ul>
  `;
}

function getWarningLabelIds() {
  return state.store.labels.filter((label) => label.warnings.length > 0).map((label) => label.id);
}

function findNextWarningLabelId(currentLabelId) {
  const warningLabelIds = getWarningLabelIds();
  if (!warningLabelIds.length) {
    return null;
  }

  const currentIndex = warningLabelIds.indexOf(currentLabelId);
  if (currentIndex === -1) {
    return warningLabelIds[0];
  }

  return warningLabelIds[(currentIndex + 1) % warningLabelIds.length];
}

function gotoNextWarningLabel() {
  const nextLabelId = findNextWarningLabelId(state.selectedLabelId);
  if (!nextLabelId) {
    notify('경고 라벨이 없습니다.', 'success');
    return;
  }

  if (nextLabelId === state.selectedLabelId) {
    notify('현재 라벨이 유일한 경고 라벨입니다.', 'info');
    return;
  }

  state.selectedLabelId = nextLabelId;
  switchTab('labels');
  renderLabelsList();
  renderLabelEditor();
  notify('다음 경고 라벨로 이동했습니다.', 'info');
}

function focusLabelField(fieldKey) {
  if (!fieldKey) {
    return;
  }

  const fieldInput =
    refs.labelForm.querySelector(`[name="${fieldKey}"]`)
    || refs.labelForm.querySelector(`[data-candidate-field="${fieldKey}"]`);
  if (!fieldInput) {
    notify('해당 필드를 찾지 못했습니다.', 'warning');
    return;
  }

  fieldInput.focus();
  fieldInput.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const fieldBlock = fieldInput.closest('.field-block');
  if (fieldBlock) {
    fieldBlock.classList.add('field-focus');
    setTimeout(() => {
      fieldBlock.classList.remove('field-focus');
    }, 1200);
  }
}

function renderPrintArea() {
  if (!state.store.labels.length) {
    refs.printArea.innerHTML = '<div class="empty-box">출력할 라벨이 없습니다.</div>';
    refs.printSummary.textContent = '라벨 0장';
    return;
  }

  refs.printArea.innerHTML = state.store.labels.map((label) => renderPrintSheet(label)).join('');
  requestAnimationFrame(fitPrintSheetText);

  const warningLabels = state.store.labels.filter((label) => label.warnings.length > 0).length;
  refs.printSummary.textContent = `라벨 ${state.store.labels.length}장 | 경고 라벨 ${warningLabels}장`;
}

function renderPrintSheet(label) {
  const fields = label.fields;
  const isFish = fields.labelType === '어류';
  const deliveryDateLabel = isFish ? '납품일' : '납품일자';
  const deliveryDate = isFish ? fields.deliveryDateWithWeekday || fields.deliveryDate : fields.deliveryDate;
  const manufactureDateLabel = isFish ? '제조년월일' : '제조일자';
  const noticeLines = buildNoticeLines(fields);
  const noticeHtml = noticeLines
    .map((line) => `<li>${escapeHtml(line)}</li>`)
    .join('');

  return `
    <article class="label-sheet ${isFish ? 'fish' : 'meat'}">
      <table class="label-table">
        <colgroup>
          <col class="col-key" />
          <col class="col-value" />
          <col class="col-key" />
          <col class="col-value" />
        </colgroup>
        <tbody>
          <tr class="top-row">
            <th>납품처</th>
            <td colspan="3" class="main-target fit-cell">${escapeHtml(valueOrDash(fields.deliveryPlace))}</td>
          </tr>
          <tr>
            <th>품명</th>
            <td class="fit-cell">${escapeHtml(valueOrDash(fields.itemName))}</td>
            <th>${deliveryDateLabel}</th>
            <td class="fit-cell numeric-cell">${escapeHtml(valueOrDash(deliveryDate))}</td>
          </tr>
          <tr>
            <th>중량</th>
            <td class="weight-value fit-cell">${escapeHtml(formatWeightDisplayForPrint(fields.weightDisplay))}</td>
            <th>${manufactureDateLabel}</th>
            <td class="fit-cell numeric-cell">${escapeHtml(valueOrDash(fields.manufactureDate))}</td>
          </tr>
          <tr>
            <th>원산지</th>
            <td class="fit-cell">${escapeHtml(valueOrDash(fields.origin))}</td>
            <th>소비기한</th>
            <td class="fit-cell numeric-cell">${escapeHtml(valueOrDash(fields.shelfLifeDate))}</td>
          </tr>
          <tr>
            <th>용도</th>
            <td class="fit-cell">${escapeHtml(valueOrDash(fields.usage))}</td>
            <th>규격</th>
            <td class="fit-cell numeric-cell">${escapeHtml(valueOrDash(fields.spec))}</td>
          </tr>
          <tr>
            <th>원재료및함량</th>
            <td class="fit-cell">${escapeHtml(valueOrDash(fields.ingredients))}</td>
            <th>품목제조보고번호</th>
            <td class="fit-cell numeric-cell">${escapeHtml(valueOrDash(fields.reportNo))}</td>
          </tr>
          <tr>
            <th>구분</th>
            <td class="fit-cell">${escapeHtml(valueOrDash(fields.storageType))}</td>
            <th>보관방법</th>
            <td class="fit-cell">${escapeHtml(valueOrDash(fields.storageMethod))}</td>
          </tr>
          <tr>
            <th>도축장명</th>
            <td class="fit-cell">${escapeHtml(valueOrDash(fields.slaughterhouse))}</td>
            <th>이력번호</th>
            <td class="fit-cell numeric-cell">${escapeHtml(valueOrDash(fields.traceNo))}</td>
          </tr>
          <tr>
            <th>제조원</th>
            <td colspan="3" class="maker fit-cell">${escapeHtml(valueOrDash(fields.manufacturer))}</td>
          </tr>
          <tr>
            <th>판매원</th>
            <td class="fit-cell">${escapeHtml(valueOrDash(fields.seller))}</td>
            <th>식품유형</th>
            <td class="fit-cell">${escapeHtml(valueOrDash(fields.foodType))}</td>
          </tr>
          <tr class="notice-row">
            <td colspan="4" class="notice-cell">
              <div class="label-notice-wrap">
                <ul class="label-notice-list">${noticeHtml}</ul>
                <img class="label-stamp" src="./assets/haccp.png" alt="HACCP 안전관리인증 마크" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  `;
}

function formatWeightDisplayForPrint(value) {
  const raw = String(value || '').trim();
  if (!raw) {
    return '-';
  }

  if (raw.includes('총')) {
    return raw;
  }

  const normalized = raw
    .replace(/\s*\/\s*/g, '/')
    .replace(/\s*kg\s*$/i, '')
    .trim();
  return normalized ? `${normalized} kg` : raw;
}

function buildNoticeLines(fields) {
  const lines = [];
  if (fields.licenseNo) {
    lines.push(`허가번호 : ${fields.licenseNo}`);
  }

  const extraLines = String(fields.fixedNotice || '')
    .split('\n')
    .map((line) => cleanNoticeLine(line))
    .filter((line) => line && !line.includes('허가번호'));

  return [...lines, ...extraLines];
}

function cleanNoticeLine(value) {
  return String(value || '')
    .replace(/^[▶•\-\s]+/, '')
    .trim();
}

function valueOrDash(value) {
  const text = String(value ?? '').trim();
  return text || '-';
}

function fitPrintSheetText() {
  const labelsTab = document.getElementById('tab-labels');
  if (!labelsTab?.classList.contains('active') || refs.printArea.clientWidth <= 0) {
    return;
  }

  const fitCells = refs.printArea.querySelectorAll('.fit-cell');
  fitCells.forEach((cell) => {
    if (!(cell instanceof HTMLElement)) {
      return;
    }

    if (cell.clientWidth <= 0 || cell.clientHeight <= 0) {
      return;
    }

    cell.style.fontSize = '';
    cell.style.lineHeight = '';

    const computedFontSize = Number.parseFloat(window.getComputedStyle(cell).fontSize || '9');
    let fontSize = Number.isFinite(computedFontSize) ? computedFontSize : 9;
    const minFontSize = 6.2;
    const step = 0.2;

    while ((cell.scrollWidth > cell.clientWidth || cell.scrollHeight > cell.clientHeight) && fontSize > minFontSize) {
      fontSize = Math.max(minFontSize, fontSize - step);
      cell.style.fontSize = `${fontSize}px`;
      cell.style.lineHeight = '1.05';
    }
  });
}

function openPrintCheckModal() {
  if (!state.store.labels.length) {
    notify('출력할 라벨이 없습니다.', 'warning');
    return;
  }

  const report = buildPrintCheckReport();
  state.pendingPrintCheck = report;
  refs.printCheckSummary.textContent =
    `총 ${report.total}장 | 중복 제거 ${report.uniqueTotal}종 | 육류 ${report.meatCount}장 | 어류 ${report.fishCount}장 | 경고 라벨 ${report.warningLabelCount}장`;

  refs.printCheckLabelBox.innerHTML = report.groups
    .map((group) => {
      const label = group.representative;
      const warningText = group.warnings.length
        ? `<div class="label-group-warn">경고: ${escapeHtml(group.warnings.join(', '))}</div>`
        : '';
      return `
        <div class="label-group-item">
          <div class="label-group-head">
            <strong>${escapeHtml(label.fields.labelType)} | ${escapeHtml(label.fields.itemName || '(미매핑)')}</strong>
            <span class="label-count-badge">${group.count}장</span>
          </div>
          <div>${escapeHtml(label.fields.deliveryPlace)} | ${escapeHtml(label.fields.weightDisplay)} | ${escapeHtml(label.fields.deliveryDate)}</div>
          ${warningText}
        </div>
      `;
    })
    .join('');

  if (report.warningLabelCount > 0) {
    const warningList = report.warningItems
      .map(([warning, count]) => `<li>${escapeHtml(warning)}: ${count}건</li>`)
      .join('');
    refs.printCheckWarningBox.classList.remove('empty');
    refs.printCheckWarningBox.innerHTML = `
      <strong>경고가 남아 있습니다. 강행 인쇄 전 확인하세요.</strong>
      <ul>${warningList}</ul>
    `;
    refs.printCheckConfirm.textContent = '강행 인쇄';
    refs.printCheckGoLabels.hidden = false;
  } else {
    refs.printCheckWarningBox.classList.add('empty');
    refs.printCheckWarningBox.innerHTML = '<strong>경고 항목이 없습니다. 바로 인쇄 가능합니다.</strong>';
    refs.printCheckConfirm.textContent = '인쇄 진행';
    refs.printCheckGoLabels.hidden = true;
  }

  refs.printCheckModal.hidden = false;
}

function closePrintCheckModal() {
  refs.printCheckModal.hidden = true;
  state.pendingPrintCheck = null;
}

function buildPrintCheckReport() {
  const labels = state.store.labels;
  const groups = collectLabelGroups(labels);
  const warningLabels = labels.filter((label) => label.warnings.length > 0);
  const warningMap = warningLabels.reduce((acc, label) => {
    label.warnings.forEach((warning) => {
      acc.set(warning, (acc.get(warning) || 0) + 1);
    });
    return acc;
  }, new Map());

  return {
    total: labels.length,
    uniqueTotal: groups.length,
    meatCount: labels.filter((label) => label.fields.labelType === '육류').length,
    fishCount: labels.filter((label) => label.fields.labelType === '어류').length,
    warningLabelCount: warningLabels.length,
    warningItems: [...warningMap.entries()].sort((a, b) => b[1] - a[1]),
    firstWarningLabelId: warningLabels[0]?.id || null,
    groups,
  };
}

async function executePrintFromCheck() {
  if (!state.pendingPrintCheck) {
    return;
  }

  const report = state.pendingPrintCheck;
  const forced = report.warningLabelCount > 0;
  logPrintAudit(report, forced);
  await saveStoreNow();
  closePrintCheckModal();
  window.print();
  notify(forced ? '경고 상태로 인쇄를 강행했습니다.' : '인쇄를 시작했습니다.', forced ? 'warning' : 'success');
}

function jumpToFirstWarningLabel() {
  const labelId = state.pendingPrintCheck?.firstWarningLabelId;
  if (!labelId) {
    closePrintCheckModal();
    return;
  }

  state.selectedLabelId = labelId;
  closePrintCheckModal();
  switchTab('labels');
  renderLabelsList();
  renderLabelEditor();
  notify('경고 라벨 편집 화면으로 이동했습니다.', 'info');
}

function logPrintAudit(report, forced) {
  if (!Array.isArray(state.store.printAudit)) {
    state.store.printAudit = [];
  }

  state.store.printAudit.push({
    id: safeId('print'),
    printedAt: new Date().toISOString(),
    totalLabels: report.total,
    warningLabels: report.warningLabelCount,
    warningItems: report.warningItems.map(([warning, count]) => ({ warning, count })),
    forced,
  });

  if (state.store.printAudit.length > 200) {
    state.store.printAudit = state.store.printAudit.slice(-200);
  }
}

function switchTab(tabName) {
  if (!FLOW_STEPS.some((step) => step.tab === tabName)) {
    return;
  }

  state.activeTab = tabName;
  renderWorkspaceHeader();
  refs.tabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === tabName);
  });

  refs.tabPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === `tab-${tabName}`);
  });
  renderHeaderMetrics();
  if (tabName === 'labels') {
    requestAnimationFrame(fitPrintSheetText);
  }
}

function getSelectedLabel() {
  if (!state.store.labels.length) {
    return null;
  }

  if (!state.selectedLabelId) {
    state.selectedLabelId = state.store.labels[0].id;
  }

  return state.store.labels.find((label) => label.id === state.selectedLabelId) || state.store.labels[0];
}

function sanitizeStore(rawStore) {
  const sanitized = structuredClone(DEFAULT_STORE);

  if (!rawStore || typeof rawStore !== 'object') {
    return sanitized;
  }

  sanitized.imports = Array.isArray(rawStore.imports) ? rawStore.imports : [];
  sanitized.labels = Array.isArray(rawStore.labels) ? rawStore.labels.map(normalizeLabelRecord) : [];
  sanitized.printAudit = Array.isArray(rawStore.printAudit) ? rawStore.printAudit : [];

  const rawMasters = rawStore.masters || {};
  MASTER_CONFIGS.forEach((config) => {
    sanitized.masters[config.key] = Array.isArray(rawMasters[config.key]) ? rawMasters[config.key] : [];
  });

  sanitized.masters.defaults = {
    ...DEFAULT_STORE.masters.defaults,
    ...(rawMasters.defaults || {}),
  };

  return sanitized;
}

function normalizeLabelRecord(label) {
  if (!label || typeof label !== 'object') {
    return {
      id: safeId('lbl-recovered'),
      sourceRowId: '',
      splitIndex: 1,
      splitCount: 1,
      fields: {},
      manualOverrides: {},
      warnings: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  return {
    ...label,
    fields: typeof label.fields === 'object' && label.fields ? label.fields : {},
    manualOverrides:
      typeof label.manualOverrides === 'object' && label.manualOverrides ? label.manualOverrides : {},
    warnings: Array.isArray(label.warnings) ? label.warnings : [],
  };
}

function extractByHeader(row, expectedHeader) {
  const expected = normalizeHeader(expectedHeader);
  for (const key of Object.keys(row)) {
    if (normalizeHeader(key) === expected) {
      return row[key];
    }
  }
  return '';
}

function normalizeHeader(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[()]/g, '');
}

function isSummaryRow(row) {
  const no = String(extractByHeader(row, '번호') || '').trim();
  const productName = String(extractByHeader(row, '상품명') || '').trim();
  return no === '총계' || productName === '총계';
}

function isEmptyRawRow(row) {
  const keys = ['납품일자', '식당', '상품명', '단위', '수량', '비고', '수정시간'];
  return keys.every((key) => {
    const value = extractByHeader(row, key);
    return String(value ?? '').trim() === '';
  });
}

function parseNumber(value) {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }
  const normalized = String(value ?? '')
    .replace(/,/g, '')
    .trim();
  const number = Number(normalized);
  return Number.isFinite(number) ? number : 0;
}

function normalizeDate(value) {
  if (value === null || value === undefined || value === '') {
    return '';
  }

  if (typeof value === 'number') {
    const parsed = XLSX.SSF.parse_date_code(value);
    if (!parsed) return '';
    const date = new Date(parsed.y, parsed.m - 1, parsed.d);
    return formatDate(date);
  }

  const text = String(value).trim();
  const cleaned = text.replace(/\./g, '-').replace(/\//g, '-');

  const direct = parseDate(cleaned);
  if (direct) {
    return formatDate(direct);
  }

  return '';
}

function normalizeDateTime(value) {
  if (value === null || value === undefined || value === '') {
    return '';
  }

  if (typeof value === 'number') {
    const parsed = XLSX.SSF.parse_date_code(value);
    if (!parsed) return '';
    const date = new Date(parsed.y, parsed.m - 1, parsed.d, parsed.H, parsed.M, Math.floor(parsed.S || 0));
    return formatDateTime(date);
  }

  const text = String(value).trim();
  const date = new Date(text.replace(/\./g, '-'));
  if (Number.isNaN(date.getTime())) {
    return text;
  }
  return formatDateTime(date);
}

function parseDate(yyyyMmDd) {
  if (!yyyyMmDd) {
    return null;
  }

  const match = String(yyyyMmDd).match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (!match) {
    const date = new Date(yyyyMmDd);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);

  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatDateTime(date) {
  const dateText = formatDate(date);
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');
  return `${dateText} ${hh}:${mm}:${ss}`;
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function splitWeights(total, packUnit) {
  if (!total || total <= 0) {
    return [];
  }

  if (!packUnit || packUnit <= 0) {
    return [roundWeight(total)];
  }

  const fullCount = Math.floor(total / packUnit);
  const remain = roundWeight(total - fullCount * packUnit);

  const chunks = [];
  for (let i = 0; i < fullCount; i += 1) {
    chunks.push(roundWeight(packUnit));
  }

  if (remain > 0) {
    chunks.push(remain);
  }

  if (!chunks.length) {
    chunks.push(roundWeight(total));
  }

  return chunks;
}

function roundWeight(value) {
  return Math.round(value * 1000) / 1000;
}

function formatWeight(value) {
  const num = Number(value || 0);
  if (Number.isNaN(num)) {
    return '0';
  }

  if (Math.abs(num - Math.round(num)) < 0.000001) {
    return String(Math.round(num));
  }
  return String(num);
}

function findPackUnitKg(restaurantName) {
  const rows = state.store.masters.packUnits;
  if (!rows.length) {
    return 0;
  }

  const original = normalizeRestaurantName(restaurantName);
  const exact = rows.find((row) => normalizeRestaurantName(row.branchName) === original);
  if (exact) {
    return parseNumber(exact.packKg);
  }

  const partial = rows.find((row) => original.includes(normalizeRestaurantName(row.branchName)));
  if (partial) {
    return parseNumber(partial.packKg);
  }

  return 0;
}

function normalizeRestaurantName(value) {
  return String(value || '')
    .replace(/\(주\)/g, '')
    .replace(/주식회사/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function detectLabelType(productName) {
  const text = String(productName || '');
  if (FISH_KEYWORDS.some((keyword) => text.includes(keyword))) {
    return '어류';
  }

  const matchInMaster = state.store.masters.itemNames.find(
    (row) => row.keyword && text.includes(row.keyword) && row.type === '어류'
  );

  return matchInMaster ? '어류' : '육류';
}

function detectStorageType(productName) {
  const text = String(productName || '');
  return text.includes('냉동') ? '냉동' : '냉장';
}

function detectOrigin(productName) {
  const text = String(productName || '');
  const found = ORIGIN_KEYWORDS.find((origin) => text.includes(origin));
  return found || '';
}

function detectUsage(productName) {
  const direct = getUsageCandidates(productName)[0];
  if (direct) {
    return trimText(direct.value);
  }

  const matched = trimText(productName).match(/([가-힣A-Za-z0-9]+용)/g);
  if (!matched || !matched.length) {
    return '';
  }

  return matched[0];
}

function detectSpec(productName, labelType) {
  const matched = getSpecCandidates(productName, labelType)[0];
  if (matched) {
    return trimText(matched.value);
  }

  const textMatch = trimText(productName).match(/\d+(?:\.\d+)?\*\d+(?:\.\d+)?\*\d+(?:\.\d+)?/);
  if (textMatch) {
    return textMatch[0];
  }

  return '';
}

function findStandardItemName(productName, labelType) {
  const text = trimText(productName);
  const matched = getItemNameCandidates(text, labelType)[0];
  if (matched) {
    return trimText(matched.standardName);
  }

  const firstPart = text.split('(')[0].trim();
  return firstPart;
}

function findProductReportByItemName(itemName) {
  return getProductReportCandidates(itemName)[0] || null;
}

function findTraceabilityByItemName(itemName, requiredKg) {
  return getTraceabilityCandidates(itemName, requiredKg)[0] || null;
}

function calcMeatManufactureDate(supplyDate) {
  const date = parseDate(supplyDate);
  if (!date) {
    return '';
  }

  const diff = date.getDay() === 1 ? -3 : -1;
  return formatDate(addDays(date, diff));
}

function calcFishManufactureDate(supplyDate) {
  const date = parseDate(supplyDate);
  if (!date) {
    return '';
  }

  const day = date.getDay();
  const toMonday = day === 0 ? -6 : 1 - day;
  const monday = addDays(date, toMonday);
  const previousFriday = addDays(monday, -3);
  return formatDate(previousFriday);
}

function weekdayText(supplyDate) {
  const date = parseDate(supplyDate);
  if (!date) {
    return '';
  }
  return KOREAN_WEEK_DAYS[date.getDay()];
}

function safeId(prefix = '') {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function notify(message, type = 'info', duration = 2800) {
  if (!refs.toastRegion) {
    return;
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = String(message || '');
  refs.toastRegion.appendChild(toast);

  const timeoutMs = Math.max(900, Number(duration) || 2800);
  const fadeMs = Math.max(timeoutMs - 220, 200);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(4px)';
  }, fadeMs);

  setTimeout(() => {
    toast.remove();
  }, timeoutMs);
}

function queueSave() {
  clearTimeout(state.saveTimer);
  state.saveTimer = setTimeout(() => {
    saveStoreNow();
  }, 250);
}

async function saveStoreNow() {
  if (state.isSaving) {
    state.needsSave = true;
    return;
  }
  state.isSaving = true;
  state.needsSave = false;
  refs.saveButton.disabled = true;
  refs.saveButton.textContent = '저장중...';

  try {
    await window.desktopApi.saveStore(state.store);
  } catch (error) {
    notify(`저장 실패: ${error.message}`, 'error', 5000);
  } finally {
    state.isSaving = false;
    refs.saveButton.disabled = false;
    refs.saveButton.textContent = '저장';

    if (state.needsSave) {
      saveStoreNow();
    }
  }
}
