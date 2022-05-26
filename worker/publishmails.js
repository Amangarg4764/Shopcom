const queue = require('../Config/kue');
const publishmailer=require('../mailer/adsPublish');

queue.process('publish',function(job,done){
    //console.log("email worker is process a job", job.data);
    publishmailer.newads(job.data.ad,job.data.post);
    done();
});