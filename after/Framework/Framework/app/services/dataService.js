"use strict";

angular.module('app').factory('dataService',
    ['$timeout',
    function ($timeout) {

    var locations = [
        {
            id: 1000,
            name: 'Raquette River',
            temperature: 55,
            guides: 20,
            rafts: 18,
            vests: 200,
            image: 'river1.png'
        },
        {
            id: 1001,
            name: 'Black River',
            temperature: 53,
            guides: 36,
            rafts: 22,
            vests: 250,
            image: 'river2.png'
        },
        {
            id: 1002,
            name: 'Hudson River',
            temperature: 58,
            guides: 56,
            rafts: 40,
            vests: 500,
            image: 'river3.png'
        },
        {
            id: 1003,
            name: 'Hudson Gorge',
            temperature: 39,
            guides: 8,
            rafts: 10,
            vests: 40,
            image: 'river4.png'
        },
        {
            id: 1004,
            name: 'Saranac River',
            temperature: 32,
            guides: 8,
            rafts: 8,
            vests: 100,
            image: 'river1.png'
        },
        {
            id: 1005,
            name: 'Black Creek',
            temperature: 34,
            guides: 22,
            rafts: 12,
            vests: 230,
            image: 'river2.png'
        },
        {
            id: 1006,
            name: 'Batten Kill',
            temperature: 54,
            guides: 20,
            rafts: 24,
            vests: 420,
            image: 'river3.png'
        },
        {
            id: 1007,
            name: 'Ausable River',
            temperature: 38,
            guides: 12,
            rafts: 8,
            vests: 225,
            image: 'river4.png'
        }
    ];

    var employees = [
        {
            id: 5000,
            name: 'Andy Chatterton',
            location: 'Raquette River',
            image: 'employee-andy.png'
        },
        {
            id: 5001,
            name: 'April Donaldson',
            location: 'Saranac River',
            image: 'employee-april.png'
        },
        {
            id: 5002,
            name: 'Don Morgan',
            location: 'Black Creek',
            image: 'employee-don.png'
        },
        {
            id: 5003,
            name: 'Tom Sullivan',
            location: 'Ausable River',
            image: 'employee-tom.png'
        },
        {
            id: 5004,
            name: 'Kathy Fletcher',
            location: 'Batten Kill',
            image: 'employee-kathy.png'
        }
    ];

    var getLocations = function () {
        return $timeout(function () {
            return locations;
        }, 500);
    };

    var getLocation = function (id) {
        var timeout = $timeout(function () {
            //$timeout.cancel(timeout);
            //return undefined;
            for (var i = 0; i < locations.length; i++)
                if (locations[i].id == id)
                    return locations[i];
            return undefined;
        }, 300);

        return timeout;
    };

    var getEmployees = function () {
        return $timeout(function () {
            return employees;
        }, 500);
    };

    var getEmployee = function (id) {
        return $timeout(function () {
            for (var i = 0; i < employees.length; i++)
                if (employees[i].id == id)
                    return employees[i];
            return undefined;
        }, 300);
    };


    return {
        getLocations: getLocations,
        getLocation: getLocation,
        getEmployees: getEmployees,
        getEmployee: getEmployee
    };
}]);