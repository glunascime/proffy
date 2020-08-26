const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://github.com/diego3g.png",
        whatsapp: "51900000000", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1,
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues});

    const selectedProffys = await db.all("SELECT * FROM proffys");
    console.log(selectedProffys);

    const selectedClassesAndProffys = await db.all (`
    SELECT class.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1
    `);
    console.log(selectedClassesAndProffys);

    const selectedClassesSchedules = await db.all (`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE classe_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
    `);

    console.log(selectedClassesSchedules);

})