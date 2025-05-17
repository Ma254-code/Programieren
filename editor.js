function updatePreview() {
  const code = document.getElementById('editor').value;
  const previewFrame = document.getElementById('preview');
  const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  doc.open();
  doc.write(code);
  doc.close();
}
