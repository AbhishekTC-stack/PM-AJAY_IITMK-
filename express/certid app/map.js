import express from 'express';
import certi_db from './map.js' 

const app = express();
const port = 8000;

app.use(express.json());

app.get('/view_certi', (req, res) => {
    const certi_id = Number(req.query.id);
    console.log(certi_id);

    if (certi_db.has(certi_id)) {
        const data = certi_db.get(certi_id);
        res.status(200).json({
            data,
            msg: `This is to certify that ${data.candidate} has successfully completed Blockchain Foundation with ${data.grade} on ${data.date}`
        });
    } else {
        res.status(400).json({ msg: 'invalid ID' });
    }
});


app.post('/new_certi',(req,res)=>{
    const {certified_blockchain_associate, certificate_id, candidate, grade, date} = req.body;
    if(!certi_db.has(certificate_id)){
        certi_db.set(certificate_id,{certified_blockchain_associate, candidate, grade, date})
        res.status(200).json({msg: 'Certificate added successfully!'})
    }else{
        res.status(400).json({msg: 'certificate id already existed!'})
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
