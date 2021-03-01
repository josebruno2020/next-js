async function tempo(req, res){
  const apiSecret = process.env.CONVERT_KIT_KEY;
  const dynamicDate = new Date();

  const fetch = await fetch();

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

  res.json({
    date:dynamicDate.toGMTString()
  });
}

export default tempo;