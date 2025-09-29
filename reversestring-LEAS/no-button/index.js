(function () {
  const input = document.getElementById('textInput');
  const result = document.getElementById('result');

  // Robust reverse using grapheme clusters when available (handles emojis, accents, ZWJ)
  function reverseGraphemes(str) {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
      const graphemes = Array.from(segmenter.segment(str), s => s.segment);
      return graphemes.reverse().join('');
    }
    // Fallback: reverse by Unicode code points (Array.from handles surrogate pairs)
    return Array.from(str).reverse().join('');
  }

  function update() {
    const value = input.value || '';
    result.textContent = reverseGraphemes(value);
  }

  // Initialize
  input.addEventListener('input', update);
  update();
})();
