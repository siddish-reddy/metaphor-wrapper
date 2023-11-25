async function getIndexPopup() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const current_tab_url = tabs[0]?.url;
  console.log(current_tab_url);
  const cleaned_current_tab_url_without_utm = current_tab_url?.replace(/(utm_[^&]+&?)/g, "");

  const domain = cleaned_current_tab_url_without_utm?.split("/")[2];

  const q = encodeURIComponent(cleaned_current_tab_url_without_utm);
  const filters = encodeURIComponent(JSON.stringify({
    "domainFilterType": "exclude",
    "timeFilterOption": "any_time",
    "activeTabFilter": "all",
    "excludeDomains": [domain]
  }));

  const redirect_url = `https://metaphor.systems/search?q=${q}&filters=${filters}`;

  if (cleaned_current_tab_url_without_utm) {
    window.open(redirect_url, "_blank");
  }

  return null;
}

export default getIndexPopup;