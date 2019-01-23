// Imports the data set: https://drive.google.com/open?id=1i2g6lBYBam7-EdAVf2JzBE0mZs029oCiKfEFzTaDQmE

const formatDate = (fromApi) => util.time.tz(fromApi, 'America/Detroit').toDate() //Formats date and time to Detroit's time zone

export default async (row) => {
//The geo.locate utility allows you to return latitude and longitude if the location is stored as an address. 
 const location = await util.geo.locate({
 address: row.Address,
 city: 'detroit',
 region: 'michigan'
 })
 if (!location) return null
 
 //map of fields you'd like to transform to the Artwork data type.
 return { 
 id: String(row.id), 
 artists: row.Artists ? String(row.Artists).split(',').map(util.normalize) : undefined, //Trims, lowercases, and removes redundant whitespace from the given value.
 startedAt: formatDate(row.Started),
 name: util.normalize(row.Name), //The Name fields contains mix of all caps and undercase so the normalize utility helps make the text uniform
 images: row.images ? [
 row.images
 ] : undefined,
 notes: row.Notes ? String(row.Notes) : null,
 address: row.address,
 location
 }
}