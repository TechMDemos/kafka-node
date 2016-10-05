var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var connectionString = "172.16.0.166:2181"
var client= new kafka.Client(connectionString);
var consumer = new Consumer(
  client,
         [
             { topic:'TutorialTopic', partition: 0 }
         ],
         {
             autoCommit: false
         }
     );

consumer.on('message', function(msg){
console.log("Message from Kafka: " + msg.value)

});
consumer.on('error', function(err){
  console.log('[Error]' + err);
})
