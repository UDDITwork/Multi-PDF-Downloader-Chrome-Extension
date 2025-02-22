![UDDIT](https://github.com/user-attachments/assets/e73d50ae-6794-4366-ba99-752f9ed936ba)
## 🎥 Demo Video

Want to see the extension in action?  
Check out this quick demo on YouTube by clicking the thumbnail below:

[![Watch the video](https://miro.medium.com/v2/resize:fit:601/1*_pOFe9IPzIRtoZR2Hbb0nQ.png)](https://www.youtube.com/watch?v=HVi5IbzTu80 "Chrome Extension Demo")
# 📑 PDF Tab Grabber

A simple Chrome extension that:
1. Finds all open tabs in your **current window** whose URLs end in `.pdf` (case-insensitive) and start with `https://`.
2. Lists them in a stylish popup.
3. Lets you download them all at once with a single click.

---

## ⚙️ Installation

1. **Download/Clone** this repository or copy the three files:
   - **manifest.json**
   - **popup.html**
   - **popup.js**

2. **Open Chrome** and go to `chrome://extensions/`.

3. **Enable Developer Mode** (toggle in the top-right corner).

4. **Click “Load unpacked”** and select the folder containing the three files.

5. **Pin the extension** by clicking the puzzle piece icon, then pin the “📑 PDF Tab Grabber.”

---

## 🚀 Usage

1. Open some PDF tabs in your current window (e.g., `https://example.com/file.pdf`).
2. Click the extension icon (the pinned puzzle piece, then “📑 PDF Tab Grabber”).
3. The popup shows all active PDF tabs. 
4. Click **“🔽 Download All PDFs”** to download them.

### Where are my files saved?

- By default, Chrome saves them in your **Downloads** folder.
- If you want to group them in a subfolder, uncomment or edit the `filename` property in `popup.js`:
  ```js
  chrome.downloads.download({
    url: tab.url,
    filename: "pdfs/file_" + (index + 1) + ".pdf"
  });

---

### **How to Proceed**

1. **Copy** the first code block into a temporary file (or your code editor).  
2. **Extract** the contents of `manifest`, `popupHtml`, and `popupJs` into their respective files in your extension folder:
   - `pdf_extension/manifest.json`
   - `pdf_extension/popup.html`
   - `pdf_extension/popup.js`
3. **Copy** the second code block into a file named `README.md` (optional, for documentation).

That’s it! You now have a fully functional **Chrome extension** with emojis, improved styling, and a friendly README. Enjoy!


