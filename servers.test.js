describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    const serverTable = document.querySelector("#serverTable tbody")
    
    serverTable.innerHTML = ""
    allServers = {}
    serverId = 0
  });
});

describe("UpdateServerTable() tests", function() {
  beforeEach(function() {
    allServers = {
      server1: {serverName: 'Otis'},
      server2: {serverName: "Clem"},
      server3: {serverName: "Jimmy"}
    }
    console.log(allServers)
  })
  
  it("find the right number of servers", function() {
    expect(updateServerTable(), )
  })

  // Make sure tip amounts have 2 numbers after a decimal point
  afterAll(function() {
    allServers = {}
  })
})