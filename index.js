const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Student data
const studentData = {
    "md forhad hossain": 1287,
    "nafisa anjum": 1604,
    "md. sabab al fahmid": 1783,
    "md. sadid hossain": 2168,
    "smaran basak amit": 2176,
    "mohammad sarfaraz hussain": 2209,
    "md. shahedul islam": 2279,
    "md. tanjim hasan": 2281,
    "md. tasnim mahmud": 2337,
    "md. asif iqbal": 2383,
    "mortuza al mahmud": 2391,
    "md. ismail hosen": 2410,
    "md. ananto islam siyam": 2423,
    "md. murad hasan mukto": 2433,
    "md. fahim hassan eram": 2469,
    "afif ahnaf fuad": 2474,
    "md. rashidul amin bijoy": 2481,
    "md. tahmid khan": 2517,
    "tahmid hasan fuad": 2528,
    "md. nafis ashfaq": 2530,
    "sakhawat hossain ahad": 2533,
    "shamiul islam anik": 2553,
    "bejoy chowdhury": 2594,
    "imtiaj ahmmed": 2606,
    "md. nafis sadot": 2622,
    "md. waliullah rahman": 2633,
    "most. mashia rahman": 2646,
    "md. abid khan": 2660,
    "md. tamim shahadat": 2667,
    "ashfaque sadad": 2670,
    "md. abir hossen poros": 2680,
    "md. habibur rahman": 2685,
    "md. fahmidul haque": 2698,
    "md. saadman shahriar khan": 2702,
    "anindita shaha logno": 2706,
    "md. mahmud - ul -hassan": 2709,
    "al shariar": 2710,
    "abu hanifa": 2721,
    "kaniz farhana akhi": 2760,
    "md. sadik bin pasha": 2763,
    "ahmed al-mahtadir neel": 2769,
    "farhan muntasir haider": 2780,
    "md. sabbir hossain": 2793,
    "md. hasibur rahman ratul": 2796,
    "md. sadik mahmud": 2797,
    "tahonik kaum konok": 2800,
    "md. shamsuddin shiam": 2801,
    "rafiqul islam rahat": 2812,
    "md. riyad hasan": 2813,
    "md. rezoan khan": 2816,
    "a.k aditto": 2819,
    "md. abdul khaleq shohag": 2824,
    "md. nahid hasan": 2825,
    "masnoon tahmid": 2829,
    "prionty paul": 2830,
    "md. mahmudul hasan mahraj": 2831,
    "md. waliullah": 2833,
    "rudro das": 2835,
    "md. hasan miah": 2849,
    "raisa zahan": 2855,
    "mayeda siddika erma": 2858,
    "shaila shabnam sonali": 2866,
    "mahdi al mahmud": 2867,
    "avijit das subrato": 2868,
    "safin ahmad": 2890,
    "md muktadir rahman rabbu": 2892,
    "nafise raian chowdhury": 2896,
    "nahin ahmed": 2903,
    "md. rafid uz zaman khan": 2909,
    "md. khalid mahmud": 2911,
    "nur mahammad golam mostofa": 2918,
    "md. sinanul hoque": 2935,
    "deepro ruhul wahab": 2947,
    "ifran mohammad taib": 2949,
    "a. s. m. hafiz shahriar": 2951,
    "md. shariful islam": 2952,
    "md. moktal hossain": 2955,
    "md. sifat bin azad": 2956,
    "md. bin tayem rifat sheikh": 2967,
    "arghya nondi": 2971,
    "md. fazle rabbi": 2973,
    "md. arian hossen": 2974,
    "khan shafinuzzaman": 2990,
    "sougato kundu turjo": 2993,
    "md. nur a - tasnim": 2996,
    "bishal saha": 3001,
    "sharuar rahman shomith": 3002,
    "saurav kumar": 3010,
    "adnan shalihin": 3012,
    "md. golam rasul rabbi": 3014,
    "md. mamun hasan": 3015,
    "md. abid uddin": 3016,
    "kaniz homayra": 3019,
    "nahid islam": 3021,
    "fauzia hamid": 3025,
    "md. sohan ali": 3026,
    "md. ashik hasan": 3038,
    "laskar omar wazahat rafat": 3052,
    "khandaker taufiq hossain": 3053,
    "mahdin mohammad": 3055,
    "sainik sarkar": 3068,
    "golam rawshon utsho": 3069,
    "jiyad rahman": 3070,
    "farhan islam": 3076,
    "m.k.m nafiz": 3078,
    "sree pranto kumar ghosh": 3082,
    "md.shah alam": 3086,
    "jihadul opurbo": 3095,
    "md. raihan islam": 3101,
    "eshtiak ahmed": 3103,
    "khaleed saifullah nasif": 3113,
    "ragib shahriar piash": 3118,
    "md. anindo tofa rupantor": 3119,
    "orka kumar pramanik": 3122,
    "jayed enam antar": 3135,
    "rakibul islam": 3137,
    "diganta basak": 3138,
    "md. al jabir": 3142,
    "joyjit ghosh": 3146,
    "fariha fairuz": 3150,
    "md. muntasir rahman": 3161,
    "taslima akter jhinuk": 3163,
    "mahin muntasir": 3165,
    "tasnim shahrier": 3167,
    "tafsir hasan tripto": 3170,
    "tasnimul akram tanim": 3172,
    "mst. mabiya parvin": 3173,
    "md. shakib ahamed sarker": 3175,
    "arnob kumar ghosh": 3177,
    "md. rashedul islam": 3180,
    "md. romman hosen": 3192,
    "md. mahmudul hassan siam": 3201,
    "dewan awal mostafa": 3205,
    "tahmidul zawad": 3213,
    "sharafat hossain tias": 3223,
    "md. ashfaqur rahman": 3228,
    "md. shahariar": 3229,
    "sakib al hasan": 3233,
    "mehedi hasan omi": 3236,
    "foysal ahmed": 3240,
    "adnan ahmed": 3241,
    "md. raiyan hossain khan": 3246,
    "h. m. jisan": 3247,
    "swapnil saikat adhikary": 3248,
    "md. fahimul kabir fahim": 3261,
    "showvik mondol joy": 3266,
    "md. shahriar abdullah": 3269,
    "rudra sarkar": 3276,
    "sifat mondol": 3285,
    "md. nahid hasan": 3287,
    "ishtiak ahmed": 3288,
    "nafees shariar": 3291,
    "abu siam reza": 3292,
    "m. sayeed morsalin siyad": 3305,
    "arghya pandit badan": 3307,
    "ishraq farhan sajid": 3308,
    "md. shakib al hasan": 3318,
    "md. abu hanzalla": 3319,
    "fawziah anjum": 3323,
    "anirudha das": 3324,
    "md. munim shahoriar raim": 3327,
    "tafhimul islam": 3336,
    "arafat hossain": 3338,
    "mahathir hossain mahi": 3342,
    "ahosanul hoque": 3343,
    "md. asaduzzaman": 3351
};

// Endpoint to get all FAQs
app.get('/faq', (req, res) => {
    res.json(faqData);
});

// Endpoint to get the student list
app.get('/students', (req, res) => {
    const studentList = Object.entries(studentData).map(([name, position]) => {
        return { name, position };
    });
    res.json(studentList);
});

// Endpoint to get a specific student's information
app.get('/student/:name', (req, res) => {
    const studentName = req.params.name.toLowerCase();
    const position = studentData[studentName];
    if (position !== undefined) {
        res.json({
            message: `He/She is a student of RUET MECHANICAL ENGINEERING. His/Her position is ${position}.`
        });
    } else {
        res.status(404).json({
            error: 'Student not found'
        });
    }
});

// Endpoint to handle custom queries
app.get('/query', (req, res) => {
    const query = req.query.q.toLowerCase();
    if (query === 'student list of ruet me') {
        const studentList = Object.entries(studentData).map(([name, position]) => {
            return `${name.toUpperCase()} (Position: ${position})`;
        }).join(', ');
        res.json({
            message: `The students of RUET MECHANICAL ENGINEERING are: ${studentList}.`
        });
    } else {
        res.status(404).json({
            error: 'Query not recognized'
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
