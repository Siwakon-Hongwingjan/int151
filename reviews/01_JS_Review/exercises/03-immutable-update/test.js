const assert = require('node:assert/strict');
const updateUserProfile = require('./solution');

test('03-immutable-update', () => {
  const profile = { name: 'เอ', theme: 'light', lang: 'th' };
  const result = updateUserProfile(profile, { theme: 'dark' });

  assert.deepStrictEqual(result, { name: 'เอ', theme: 'dark', lang: 'th' });
  assert.strictEqual(profile.theme, 'light', 'ต้นฉบับ profile ต้องไม่ถูกแก้ไข');
  assert.notStrictEqual(result, profile, 'ต้อง return object ใหม่ ไม่ใช่ตัวเดิม');
});
