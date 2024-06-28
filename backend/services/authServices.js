const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('@hapi/jwt');

exports.register = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new User({ ...data, password: hashedPassword });
    return await user.save();
};

exports.login = async (data) => {
   const user = await User.findOne({ email: data.email });
   if (!user) {
    throw new Error('User not found');
   } 

   const isValid = await bcrypt.compare(data.password, user.password);
   if (!isValid) {
    throw new Error('Invalid password');
   }

   const token = jwt.token.generate(
    {
        aud: 'urn:audience:test',
        iss: 'urn:issuer:test',
        sub: false,
        maxAgeSec: 14400,
        timeSkewSec: 15,
        user: user._id
    },

    {
        key: process.env.JWT_SECRET,
        algorithm: 'HS256'
    }
   );
   return token;
}