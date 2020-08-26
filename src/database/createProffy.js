module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    
    try{
        console.log("comecando a gravacao de professores");
        //dados tabela proffys
        const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
        `);

        const proffy_id = insertedProffy.lastID;

        //dados na tabela de classe
        const insertedClass = await db.run (`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
        `);
        console.log(proffyValue);
        console.log(classValue);
        console.log(classScheduleValues);
    
        const class_id = insertedClass.lastID;

        const insertedAllClassesScheduledValues = classScheduleValues.map((classScheduleValue) => {
            return db.run (`
                INSERT INTO class_schedule (
                    class_id,
                    weekday,
                    time_from,
                    time_to
                ) VALUES (
                    "${class_id}",
                    "${classScheduleValue.weekday}",
                    "${classScheduleValue.time_from}",
                    "${classScheduleValue.time_to}"
                );
            `)
        });

        await Promise.all(insertedAllClassesScheduledValues);
    }
    catch(error){
        console.log(error);
    } 
 
}
//Eu quero ouvir o grito da sua alma
//Eu te ensino a vender... a sua arte... das coisas... que a natureza... da.