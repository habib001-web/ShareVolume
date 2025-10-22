const apiUrl = 'https://data.sec.gov/api/xbrl/companyconcept/CIK0000002488/dei/EntityCommonStockSharesOutstanding.json';

async function fetchData(cik) {
    const response = await fetch(apiUrl.replace('CIK0000002488', cik), {
        headers: {
            'User-Agent': 'My App (https://example.com)'
        }
    });
    return response.json();
}

function processResponse(data) {
    const entityName = data.entityName;
    const shares = data.units.shares.filter(share => share.fy > "2020" && !isNaN(share.val));
    
    const maxShare = shares.reduce((max, share) => share.val > max.val ? share : max, shares[0]);
    const minShare = shares.reduce((min, share) => share.val < min.val ? share : min, shares[0]);
    
    const result = {
        entityName: entityName,
        max: {
            val: maxShare.val,
            fy: maxShare.fy
        },
        min: {
            val: minShare.val,
            fy: minShare.fy
        }
    };
    
    return result;
}

function updateHTML(data) {
    document.getElementById('entity-title').textContent = data.entityName;
    document.getElementById('share-entity-name').textContent = data.entityName;
    document.getElementById('share-max-value').textContent = data.max.val;
    document.getElementById('share-max-fy').textContent = data.max.fy;
    document.getElementById('share-min-value').textContent = data.min.val;
    document.getElementById('share-min-fy').textContent = data.min.fy;
}

async function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const cik = urlParams.get('CIK') || '0000002488';
    const data = await fetchData(cik);
    const result = processResponse(data);
    updateHTML(result);
}

init();