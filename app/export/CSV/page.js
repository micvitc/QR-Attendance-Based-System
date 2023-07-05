import App from '../page.js'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



async function main() {
  await prisma.clubMember.deleteMany()
    await prisma.clubMember.createMany({


    //     data: [{
    //         RegNo:"21bce1000",
    //         name:"member1",
    //         VIT_Email:"member1@vitstudent.ac.in",
    //         Registered_Faculty : "Faculty1",
    //         Department: "webdev",
    //         WhatsappNo : "123456789",
    //         FFCS_NonFFCS : "FFCS",
    //     },
    //     {
    //         RegNo:"21bce1002",
    //         name:"member2",
    //         VIT_Email:"member2@vitstudent.ac.in",
    //         Registered_Faculty : "Faculty1",
    //         Department: "webdev",
    //         WhatsappNo : "1234256789",
    //         FFCS_NonFFCS : "FFCS",
    //     }
    //     ]

     })

    //console.log(members);

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log("ERRORRRRRR!!!!!")
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

