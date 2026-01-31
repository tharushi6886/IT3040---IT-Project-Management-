const { test, expect } = require('@playwright/test');

const scenarios = [
    { 
	id: 'TC01', 
	input: 'suba udhaeesanak veevaa!', 
	expected: 'සුබ උදෑසනක් වේවා!' 
    },
    { 
	id: 'TC02', 
	input: 'api gedhara yanavaa', 
	expected: 'අපි ගෙදර යනවා' 
    },
    { 
	id: 'TC03', 
	input: 'mama eyaava hamba venna giyaa  namuth eyath ekka kathaa kalee naehae.', 
	expected: 'මම එයාව හම්බ වෙන්න ගියා නමුත් එයත් එක්ක කතා කලේ නැහැ.' 
    },

     { 
	id: 'TC04', 
	input: 'oyaa dhaen koheedha innee?', 
	expected: 'ඔයා දැන් කොහේද ඉන්නේ?' 
    },

    { 
	id: 'TC05', 
	input: 'ovun heta koLaBA eyi.', 
	expected: 'ඔවුන් හෙට කොළඹ එයි.' 
    },

    { 
	id: 'TC06', 
	input: 'karuNaakara methanin vaadi venna.', 
	expected: 'කරුණාකර මෙතනින් වාඩි වෙන්න.' 
    },

    { 
	id: 'TC07', 
	input: 'mama adha ennee naehae.', 
	expected: 'මම අද එන්නේ නැහැ.' 
    },

    { 
	id: 'TC08', 
	input: '"ammaa kaeema hadhanavaa saha thaaththaa vathura puravanavaa."', 
	expected: '"අම්මා කෑම හදනවා සහ තාත්තා වතුර පුරවනවා."' 
    },

    { 
	id: 'TC09', 
	input: 'poth 5k thiyenavaa.', 
	expected: 'පොත් 5ක් තියෙනවා.' 
    },

    { 
	id: 'TC010', 
	input: 'mama Apple iPhone ekak gaththaa.', 
	expected: 'මම Apple iPhone එකක් ගත්තා.' 
    },

    { 
	id: 'TC011', 
	input: 'thamaa thamaa thamayi eeka kalee.', 
	expected: 'තමා තමා තමයි ඒක කලේ.' 
    },

    { 
	id: 'TC012', 
	input: 'lQQkaava kiyannee hariyata lassana mudhoo gabadaavak vagee ratak. mehe thiyena gas kolan saha visheeShayenma kandha thiyena hariya hariyata manaharayi. mama hithannee meeka balanna godak touristsla enna oona. minissu hariyata karuNaavanthayi saha upakaara karanna balan innee. suba anaagathayak lQQkaavata!', 
	expected: '"ලංකාව කියන්නේ හරියට ලස්සන මුදෝ ගබඩාවක් වගේ රටක්. මෙහෙ තියෙන ගස් කොලන් සහ විශේෂයෙන්ම කන්ද තියෙන හරිය හරියට මනහරයි. මම හිතන්නේ මේක බලන්න ගොඩක් touristsla එන්න ඕන. මිනිස්සු හරියට කරුණාවන්තයි සහ උපකාර කරන්න බලන් ඉන්නේ. සුබ අනාගතයක් ලංකාවට!"' 
    },

    { 
	id: 'TC013', 
	input: 'mokadha ban vennee?', 
	expected: 'මොකද බන් වෙන්නේ?' 
    },

    { 
	id: 'TC014', 
	input: '10:30ta enna, naethnam parakku veyi.', 
	expected: '10:30ට එන්න, නැත්නම් පරක්කු වෙයි.' 
    },

    { 
	id: 'TC015', 
	input: 'api Kandy vala perahaera baeluvaa.', 
	expected: 'අපි Kandy වල පෙරහැර බැලුවා.' 
    },

    { 
	id: 'TC016', 
	input: 'Lamayi kaeema kaeevee naehae.', 
	expected: 'ළමයි කෑම කෑවේ නැහැ.' 
    },

    { 
	id: 'TC017', 
	input: 'nama: kamal\nvayasa: 20', 
	expected: 'නම: කමල්\nවයස: 20' 
    },

    { 
	id: 'TC018', 
	input: 'potha ganna saha kiyavanna.', 
	expected: 'පොත ගන්න සහ කියවන්න.' 
    },

    { 
	id: 'TC019', 
	input: 'email eka check karanna.', 
	expected: 'email එක check කරන්න.' 
    },

    { 
	id: 'TC020', 
	input: 'mama thopiva hamba venna edhdhi thopi okkoma gihin hitiyaa.', 
	expected: 'මම තොපිව හම්බ වෙන්න එද්දි තොපි ඔක්කොම ගිහින් හිටියා.' 
    },

    { 
	id: 'TC021', 
	input: 'ela kiri machan, thnx!', 
	expected: 'එල කිරි මචන්, thnx!' 
    },

    { 
	id: 'TC022', 
	input: 'api aayeth kavadhaavath eheeta yannee naehae kiyalaa hithuvaa.', 
	expected: 'අපි ආයෙත් කවදාවත් එහේට යන්නේ නැහැ කියලා හිතුවා."' 
    },

    { 
	id: 'TC023', 
	input: 'oyaa dhaenma gihin eeka aran enna oona naethnam prashnayak veyi.', 
	expected: 'ඔයා දැන්ම ගිහින් ඒක අරන් එන්න ඕන නැත්නම් ප්‍රශ්නයක් වෙයි.' 
    },

    { 
	id: 'TC024', 
	input: '1kg seeni Rs. 250i.', 
	expected: '1kg සීනි Rs. 250යි' 
    },


     { 
	id: 'TC025', 
	input: 'mmma gedra yanwaa', 
	expected: 'මම ගෙදර යනවා' 
    },

    
     { 
	id: 'TC026', 
	input: 'I am going to gedara.', 
	expected: 'I am going to ගෙදර.' 
    },

    
     { 
	id: 'TC027', 
	input: '[No Output/Empty]', 
	expected: '' 
    },

    
     { 
	id: 'TC028', 
	input: 'mama yanawa.', 
	expected: 'මම යනවා.' 
    },

    
     { 
	id: 'TC029', 
	input: 'oyaa $#@! ekak.', 
	expected: 'ඔයා $#@! එකක්.' 
    },

    
     { 
	id: 'TC030', 
	input: 'aththa kiyanna.', 
	expected: 'ඇත්ත කියන්න.' 
    },

    
     { 
	id: 'TC031', 
	input: 'mamayanawa', 
	expected: 'මම යනවා.' 
    },

    
     { 
	id: 'TC032', 
	input: 'patta_athaleka', 
	expected: 'පට්ට_ආතල්එක' 
    },

    
     { 
	id: 'TC033', 
	input: 'eyalage gedara.', 
	expected: 'එයාලගේ ගෙදර.' 
    },

    
     { 
	id: 'TC034', 
	input: 'bbbbbbb ggggggg qqqqq', 
	expected: 'බබබබබබබ ගගගගගගග qqqqq' 
    },
];+

test.describe('Singlish Translation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { 
            waitUntil: 'load', 
            timeout: 60000 
        });
    });

    for (const data of scenarios) {
        test(`Testing ${data.id} - ${data.input}`, async ({ page }) => {
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            
            await page.waitForTimeout(1000);
            await inputField.fill(''); 
            await inputField.fill(data.input); 

            await page.waitForTimeout(3000); 

            const outputField = page.locator('.card').filter({ hasText: 'Sinhala' }).locator('div.whitespace-pre-wrap');
            const actualText = (await outputField.innerText()).trim();

            console.log(`Test ID: ${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualText}`);

            expect(actualText).toBe(data.expected);
        });
    }
});