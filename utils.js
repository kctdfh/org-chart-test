const Managers = function () {
    Papa.parse("./people/managers.csv", {
        download: true,
        header: true,
        complete: function (results) {
            return results.data;
        }
    });
};

const NotManagers = function () {
    Papa.parse("./people/notManagers.csv", {
        download: true,
        header: true,
        complete: function (results) {
            return results.data;
        }
    });
};


function getManagers(teamId) {
    allManagers = Managers();
    return allManagers.filter(function (manager) {
        return manager.teamId === teamId;
    });
}