let imageFile = null;

// Step 1: Image upload → show preview + enable button
document.getElementById("imageUpload").addEventListener("change", function () {
    imageFile = this.files[0];
    if (imageFile) {
        showPreview();
        document.getElementById("analyzeBtn").disabled = false;
    }
});

function showPreview() {
    const previewSection = document.getElementById("previewSection");
    const previewOutput = document.getElementById("previewOutput");
    previewSection.classList.remove("hidden");

    previewOutput.innerHTML = `
        <h3>Personal Tone Preview</h3>
        <ul>
            <li><b>Undertone:</b> Neutral leaning Warm</li>
            <li><b>Temperature Type:</b> Warm Soft</li>
            <li><b>Season:</b> Soft Autumn</li>
        </ul>

        <h4>Key Palette Shades</h4>
        <div style="display:flex;gap:10px;margin-top:10px;">
            <div style="width:40px;height:40px;background:#d4a373;border-radius:6px;"></div>
            <div style="width:40px;height:40px;background:#b5838d;border-radius:6px;"></div>
            <div style="width:40px;height:40px;background:#6b705c;border-radius:6px;"></div>
        </div>
    `;
}

// Step 2: Generate Full Free PDF
document.getElementById("analyzeBtn").addEventListener("click", function () {
    if (!imageFile) {
        alert("Please upload your photo first.");
        return;
    }

    document.getElementById("result").innerHTML =
        "<p>Generating your full colour analysis report...</p>";

    setTimeout(() => generatePDF(), 1200);
});

function generatePDF() {
    const pdfName = "Free_Colour_Analysis_Report.pdf";

    const content = `
--- PERSONAL COLOUR ANALYSIS REPORT ---

PAGE 1: UNDERTONE & TEMPERATURE
• Neutral leaning Warm
• Soft temperature profile
• Balanced contrast level

PAGE 2: SEASON ANALYSIS
Primary Season: Soft Autumn
Secondary Influence: Warm Autumn
Best characteristics:
• Muted warmth
• Medium depth
• Low contrast

PAGE 3: CORE COLOUR PALETTE
• Olive, Sage, Moss
• Warm Rose, Muted Peach
• Soft Teal, Camel, Cocoa
(HEX references included)

PAGE 4: OUTFIT COLOURS
• Daily wear palette
• Office-friendly tones
• Occasion highlights

PAGE 5: MAKEUP GUIDE (K-Beauty Inspired)
• Lip: Rose brown, warm nude
• Blush: Peach rose
• Eyeshadow: Soft bronze, muted taupe

PAGE 6: HAIR COLOUR SUGGESTIONS
• Warm brown
• Soft chestnut
• Golden black
Avoid: Ash, blue-black, extreme contrast

PAGE 7: ACCESSORIES
• Gold & rose gold metals
• Warm tortoise frames
• Soft leather textures

PAGE 8: DIGITAL SWATCH CARD
• Mobile-friendly palette
• Quick colour comparison
• Reference guide
`;

    const blob = new Blob([content], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = pdfName;
    link.click();

    document.getElementById("result").innerHTML =
        "<p>✔ Your free report is ready to download!</p>";
}
