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

  it("shouldn't add a new server with an empty input", function() {
    serverNameInput.value = ""
    submitServerInfo()

    expect(Object.keys(allServers).length).toEqual(0)
  })

  it("should update #serverTable on updateServerTable()", function() {
    submitServerInfo()
    
    const serverTableCells = document.querySelectorAll("#serverTable tbody td")
    console.log(serverTableCells)
    expect(serverTableCells.length).toEqual(2)
    expect(serverTableCells[0].innerText).toEqual("Alice")
    expect(serverTableCells[1].innerText).toEqual("$0.00")
  })

  afterEach(function() {
    const serverTable = document.querySelector("#serverTable tbody")
    
    serverTable.innerHTML = ""
    allServers = {}
    serverId = 0
  });
});