// Undefined Responses

const row = {
 name: 'pear'
}

util.capitalize(row.notes) // undefined
util.convert(row.speed).from('m/h').to('km/h') // undefined

// ID Generator - util.guid

// util.guid(...values)
util.guid('Michael Scott', 'Birthday', null, 1993) // f8e61be1-0b1c-4e4f-81b6-050ae9b8a049

// Slug Generator - util.slug

// util.slug(...values)
util.slug('Michael Scott', 'Birthday', null, 1993) // michael-scott-birthday-1993

// Normalization - util.normalize

// util.normalize(value) 
util.normalize('\t HEY \n THANKS') // hey thanks

// Capitalization - util.capitalize

// util.capitalize(value)
util.capitalize('\t HEY \n THANKS') // Hey thanks

// Capitalize all words - util.capitalize.words

// util.capitalize.words(value)
util.capitalize.words('\t emergency \n call ') // EMERGENCY CALL

// Phone number normalization - util.phone

// util.phone(value[, country])
util.phone(' 123 ') // undefined
util.phone(123) // undefined

// USA numbers
util.phone('4805335949') // +14805335949
util.phone('(480) 533-5949') // +14805335949
util.phone('480-533-5949') // +14805335949
util.phone(4805335949) // +14805335949

// Hong Kong numbers
util.phone('6123-6123') // undefined
util.phone('6123-6123', 'HKG') // +85261236123
util.phone('+852 6123-6123') // +85261236123

// Unit conversion - util.convert

// util.convert(value)
util.convert(null).from('m/h').to('km/h') // undefined
util.convert('1').from('F').to('C') // -17.22222222222222
util.convert(1).from('mi').to('km') // 1.6093439485009937

// Moment JavaScript wrapper - util.date

// util.date(value)
util.date('abc') // undefined
util.date(null) // undefined
util.date('12/27/1993 EST') // 1993-12-27T05:00:00.000Z

// Parse numbers - util.number

// util.number(value)
util.number('$100.56') // 100.56
util.number(100.56) // 100.56
util.number('costs $100.56') // 100.56
util.number('it is -100.56') // -100.56

// Sea coordinates - util.geo.isSea

// util.geo.isSea(value)
util.geo.isSea([ 0, 0 ]) // true

// Convert GeoJSON geometry to Multi - util.geo.multi

// util.geo.multi(value)
util.geo.multi({
 type: 'Polygon',
 coordinates: [
 [ [ 100.0, 0.0 ], [ 101.0, 0.0 ], [ 101.0, 1.0 ], [ 100.0, 1.0 ], [ 100.0, 0.0 ] ],
 [ [ 100.2, 0.2 ], [ 100.8, 0.2 ], [ 100.8, 0.8 ], [ 100.2, 0.8 ], [ 100.2, 0.2 ] ]
 ]
})

// Convert WKT to GeoJSON - util.geo.wk2JSON

// util.geo.wk2JSON(value)
util.geo.wk2JSON('POINT(1 2)') // { type: 'Point', coordinates: [1, 2] }

// Convert address to GeoJSON - util.geo.locate

// util.geo.locate({ address, city, region, country })
util.geo.locate({
 address: '19120 Grand River Ave',
 city: 'detroit',
 region: 'michigan'
 })
// "location": { "type": "Point","coordinates": [-83.229198,42.405411] }

// Convert intersection to GeoJSON - util.geo.intersection

// util.geo.intersection ({ intersection, city, region, country })
util.geo.intersection({ 
   intersection: '47th St./7th Ave.', 
   city: 'New York', 
   region: 'New York', 
   country: 'USA' 
})
// "location": { "type": "Point","coordinates": [-73.984602,40.759203]}

util.geo.intersection({ 
    intersection: '43rd St., Madison Ave.', 
    city: 'New York', 
    region: 'New York', 
    country: 'USA' 
})
// "location": { "type": "Point","coordinates": [-73.978755,40.753497]}

// Convert intersection to GeoJSON - util.geo.tz

// util.geo.tz([ longitude, latitude ])
// util.geo.tz{ "type": "Point", "coordinates": [0, 0] }

util.geo.tz([ -118.250587 , 34.031179 ]) // America/Los_Angeles 

util.geo.tz({ type: 'Point', coordinates: [ 121.456424, 31.224417 ] }) // Asia/Shanghai

// Importer Utilities

util.geo.search({ text })

util.geo.snap({ type, path, optional })

util.geo.navigate({ type, start, end, optional })

util.geo.turf // Exposes turf with no modifications. http://turfjs.org/

util._ // Exposes lodash with no modifications. https://lodash.com/

util.validator // Exposes validator with no modifications. https://github.com/chriso/validator.js#validators

util.request // Exposes superagent with no modifications. https://visionmedia.github.io/superagent/