export default async function handler(req, res) {
try {
   // WE SHOULD LIMIT OUR APIS BASED ON REQ METHOD (GET,PUT,POST,DELETE)
   if (req.method !== 'POST') {
      res.status(400).json({ error: 'Only POST requests allowed' })
   }
   // Also we should make sure user authenticated
   const { dataField } = req.body
   console.log('dataField', dataField)

   // All theoretical code until we get db setup
   // // Steps to receive data from nfc tag
   // // 1. get the data from nfc tag's uid (or can use data from its request body variable
   // // a. need this to know which data to increase tally by
   // // b. also need to know which user to increase tally for
   // const { dataField } = req.body
   // const { userId } = req.user

   // if (!dataField || !userId) {
   //    throw new Error('Missing dataField or userId')
   // }
   
   // // 2. find the user and data in the db
   // // Need to make User schema and Data schema
   // const user = await User.find();

   // if (!user) {
   //    throw new Error('User not found')
   // }
   // // find data in the user's data array using the user's id

   // // Need to make sure this is correct format
   // const data = await Data.find({ userId: user._id, dataField: dataField })

   // if (!data) {
   //    // To talk about with David -- whether if they just tap the tag they will get will just get a new data field
   //    // or if they need to create the data field first
   //    throw new Error('Data field not found -- Need to create data field first')
   // }

   // // 3. increase the tally by 1
   // data.tally += 1
   // await data.save()
   
   // 4. return ok back to nfc tag -- nfc tag will display success back to user as a notification
     res.status(200).json({ name: 'NFC tag test' })  
} catch (error) {
   res.status(400).json({ error: 'error' })
}
}
 