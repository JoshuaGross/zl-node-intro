//adding all of the dependecies
var app = require("../app"), http = require("http"), expect = require("expect.js");

describe("Tests", function(){
	var expectedNormalCode = 200, expectedErrorCode = 404,
	expectedVal1 = "hello", expectedVal2 = "world", ErrorResponse = "404 File not found";
	//option for establishing the http request
	var options = {
		hostname: "127.0.0.1",
		port: 3000,
		path: "/hello",
		mathod: "Get"
	};

	//test the request code first
	it('GET /hello should return 200',function(done){
      http.get(options, function(res){
			expect(res.statusCode).to.be(expectedNormalCode);
			expect(res.statusCode).to.not.be(expectedErrorCode);
			done();
      });
	});
	it('GET /world should return 200',function(done){
		options.path = "/world";
		http.get(options, function(res){
			expect(res.statusCode).to.be(expectedNormalCode);
			expect(res.statusCode).to.not.be(expectedErrorCode);
			done();
		});
	});
	it('GET / should return 404',function(done){
		options.path = '/';
		http.get(options, function(res){
			expect(res.statusCode).to.be(expectedErrorCode);
			expect(res.statusCode).to.not.be(expectedNormalCode);
		});
		options.path = '/index.html';
		http.get(options, function(res){
			expect(res.statusCode).to.be(expectedErrorCode);
			expect(res.statusCode).to.not.be(expectedNormalCode);
		});
		options.path = '/asdaskl';
		http.get(options, function(res){
			expect(res.statusCode).to.be(expectedErrorCode);
			expect(res.statusCode).to.not.be(expectedNormalCode);
		});
		done();
	});
	//then test if the response text 
	it("GET /hello should return world", function(done){
		options.path = '/hello';
		http.get(options, function(res){
			res.on('data', function(data){
				expect(data.toString()).to.be(expectedVal2);
				done();
			});
		});
	});
	it("GET /world should return hello", function(done){
		options.path = '/world';
		http.get(options, function(res){
			res.on('data', function(data){
				expect(data.toString()).to.be(expectedVal1);
				expect(data.toString()).to.not.be(expectedVal2);
				done();
			});
		});
	});
	it("GET anything else should return File not found", function(done){
		options.path = '/';
		http.get(options, function(res){
			res.on('data', function(data){
				expect(data.toString()).to.be(ErrorResponse);
				done();
			});
		});
	});
});