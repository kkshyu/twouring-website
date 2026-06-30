/**
 * Twouring 官網聯絡表單後端 — Google Apps Script Web App
 * 功能：將聯絡表單寫入 Google Sheet（輕量 CRM）並轉寄通知到 us@twouring.com。
 *
 * 部署：見 backend/DEPLOY.md。部署後取得 Web App URL，
 * 設定到網站環境變數 PUBLIC_CONTACT_ENDPOINT。
 */

// 收件通知信箱
var NOTIFY_TO = 'us@twouring.com';
// 工作表名稱（不存在會自動建立）
var SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};

    // honeypot：機器人通常會填這欄；網站正常送出不會帶值
    if (p.company_url) {
      return _json({ ok: true, skipped: true });
    }

    var sheet = _getSheet();
    var ts = new Date();
    sheet.appendRow([
      ts,
      p.name || '',
      p.company || '',
      p.email || '',
      p.type || '',
      p.message || '',
      p.locale || '',
      p.page || '',
    ]);

    _notify(p, ts);
    return _json({ ok: true });
  } catch (err) {
    return _json({ ok: false, error: String(err) });
  }
}

// 健康檢查（GET）
function doGet() {
  return _json({ ok: true, service: 'twouring-contact', time: new Date().toISOString() });
}

function _getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Name', 'Company', 'Email', 'Type', 'Message', 'Locale', 'Page']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function _notify(p, ts) {
  var subject = '[官網詢問] ' + (p.name || '') + ' ' + (p.company || '');
  var body =
    '時間：' + ts + '\n' +
    '姓名：' + (p.name || '') + '\n' +
    '單位／公司：' + (p.company || '') + '\n' +
    'Email：' + (p.email || '') + '\n' +
    '想談方向：' + (p.type || '') + '\n' +
    '語系：' + (p.locale || '') + '\n' +
    '來源頁：' + (p.page || '') + '\n\n' +
    '需求說明：\n' + (p.message || '');
  MailApp.sendEmail({
    to: NOTIFY_TO,
    subject: subject,
    body: body,
    replyTo: p.email || NOTIFY_TO,
  });
}

function _json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
