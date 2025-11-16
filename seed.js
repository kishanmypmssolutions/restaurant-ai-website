const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
async function main(){
  // create tables 1-20
  for(let i=1;i<=20;i++){
    await prisma.table.upsert({where:{id:i}, update:{name:`Table ${i}`}, create:{id:i, name:`Table ${i}`}})
  }
  const cat1 = await prisma.menuCategory.create({data:{name:'Starters'}})
  const cat2 = await prisma.menuCategory.create({data:{name:'Mains'}})
  const cat3 = await prisma.menuCategory.create({data:{name:'Drinks'}})
  await prisma.menuItem.createMany({data:[
    {name:'Garlic Bread', description:'Toasty', price:3.5, categoryId:cat1.id},
    {name:'Salad', description:'Fresh', price:4.0, categoryId:cat1.id},
    {name:'Pasta', description:'Creamy', price:8.5, categoryId:cat2.id},
    {name:'Pizza', description:'Cheesy', price:9.5, categoryId:cat2.id},
    {name:'Lemonade', description:'Cold', price:2.5, categoryId:cat3.id},
    {name:'Coffee', description:'Hot', price:1.8, categoryId:cat3.id}
  ]})
  await prisma.guest.createMany({data:[
    {name:'Alice', mobile:'9999999999', tableId:1, points:10},
    {name:'Bob', mobile:'8888888888', tableId:2, points:5}
  ]})
  console.log('Seed done')
}
main().catch(e=>{ console.error(e); process.exit(1)}).finally(()=>process.exit())
