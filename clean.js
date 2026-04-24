const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// The new payslip modal HTML
const payslipModal = `
    <!-- Payslip Modal -->
    <div class="modal-overlay" id="payslip-modal">
        <div class="modal-card modal-large" style="max-width: 800px;">
            <div class="modal-header">
                <h2 style="margin-bottom: 0; font-size: 24px;">مسير راتب (Payslip)</h2>
                <button type="button" class="btn-icon" onclick="document.getElementById('payslip-modal').classList.remove('active')" style="background: none; border: none; font-size: 32px; cursor: pointer; color: var(--text-muted);">&times;</button>
            </div>
            <div id="payslip-print-area" style="padding: 24px; border: 1px solid var(--border-color); border-radius: 12px; margin-top: 16px; background: white;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary-color); padding-bottom: 16px; margin-bottom: 24px;">
                    <div>
                        <h1 style="color: var(--primary-color); margin: 0;">HR SYSTEM</h1>
                        <p style="margin: 4px 0 0 0; color: var(--text-muted);">شركة الموارد البشرية</p>
                    </div>
                    <div style="text-align: left;">
                        <h2 style="margin: 0;">قسيمة راتب</h2>
                        <h3 style="margin: 4px 0 0 0; color: var(--text-muted);" id="slip-month">الشهر</h3>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; background: #f8fafc; padding: 16px; border-radius: 8px;">
                    <div><strong>اسم الموظف: </strong> <span id="slip-name"></span></div>
                    <div><strong>القسم: </strong> <span id="slip-dept"></span></div>
                    <div><strong>تاريخ المباشرة: </strong> <span id="slip-start"></span></div>
                    <div><strong>أيام العمل المحتسبة: </strong> <span id="slip-days">30</span> يوم</div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                    <div>
                        <h3 style="border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-bottom: 16px;">الاستحقاقات (Earnings)</h3>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span>الراتب الأساسي</span><strong id="slip-basic">0</strong></div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span>بدل السكن</span><strong id="slip-housing">0</strong></div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span>بدل النقل</span><strong id="slip-transport">0</strong></div>
                        <div style="display: flex; justify-content: space-between; margin-top: 16px; padding-top: 8px; border-top: 1px dashed var(--border-color);">
                            <strong>إجمالي الاستحقاقات</strong><strong id="slip-total-earnings" style="color: #10b981;">0</strong>
                        </div>
                    </div>
                    <div>
                        <h3 style="border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-bottom: 16px;">الاستقطاعات (Deductions)</h3>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span>التأمينات الاجتماعية (GOSI)</span><strong id="slip-gosi">0</strong></div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span>أخرى / غياب</span><strong id="slip-other-deductions">0</strong></div>
                        <div style="display: flex; justify-content: space-between; margin-top: 16px; padding-top: 8px; border-top: 1px dashed var(--border-color);">
                            <strong>إجمالي الاستقطاعات</strong><strong id="slip-total-deductions" style="color: #ef4444;">0</strong>
                        </div>
                    </div>
                </div>

                <div style="margin-top: 24px; background: rgba(14, 165, 233, 0.1); padding: 16px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="margin: 0; color: var(--primary-color);">صافي الراتب (Net Pay)</h2>
                    <h1 style="margin: 0; color: var(--primary-color);" id="slip-net">0 ر.س</h1>
                </div>
            </div>
            
            <div class="form-actions" style="margin-top: 24px;">
                <button type="button" class="btn-primary" onclick="window.printPayslip()"><i class="fas fa-print"></i> طباعة (Print)</button>
            </div>
        </div>
    </div>
`;

// Find the script block
const regex = /<script>\s*\/\/ --- i18n\.js ---[\s\S]*?<\/script>/;

// Replace it with payslip modal + separate scripts
const replacement = payslipModal + `
    <!-- Scripts -->
    <script src="js/i18n.js"></script>
    <script src="js/db.js"></script>
    <script src="js/app.js"></script>
`;

indexHtml = indexHtml.replace(regex, replacement);

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Restored index.html scripts and added payslip modal!');
