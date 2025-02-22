document.addEventListener('DOMContentLoaded', () => {
    const linksContainer = document.getElementById('linksContainer');
    const downloadBtn = document.getElementById('downloadAllBtn');
    let pdfTabs = [];
  
    // 1. Query all tabs in the current window
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      // 2. Filter for tabs whose URLs:
      //    - start with "https"
      //    - end with ".pdf"
      pdfTabs = tabs.filter(tab => {
        return tab.url &&
               tab.url.startsWith('https://') &&
               tab.url.toLowerCase().endsWith('.pdf');
      });
  
      // 3. Display each matching PDF tab URL in the extension popup
      pdfTabs.forEach((tab) => {
        const linkDiv = document.createElement('div');
        linkDiv.className = 'link-item';
        linkDiv.textContent = tab.url;
        linksContainer.appendChild(linkDiv);
      });
    });
  
    // 4. On "Download All PDFs" button click:
    downloadBtn.addEventListener('click', () => {
      pdfTabs.forEach((tab, index) => {
        chrome.downloads.download({
          url: tab.url,
          // Optional: specify a subfolder within the user's default Downloads folder
          // filename: `human resource/file_${index + 1}.pdf`
          filename: `pdfs/file_${index + 1}.pdf`
        });
      });
    });
  });
  