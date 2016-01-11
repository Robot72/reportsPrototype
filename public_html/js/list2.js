List = {};
List.tree = [
    {
        text: "Категория отчетов 1",
        nodes: [
            {
                text: "Отчет 1",
                icon: "glyphicon glyphicon-bed",
                href: "report_style1.html"
            },
            {
                text: "Отчет 2",
                icon: "glyphicon glyphicon-user",
                href: "report_style1.html"
            },
            {
                text: "Отчет 3",
                icon: "glyphicon glyphicon-star",
                href: "report_style1.html"
            },
            {
                text: "Отчет 4",
                icon: "glyphicon glyphicon-user",
                href: "report_style1.html"
            },
            {
                text: "Отчет 5",
                icon: "glyphicon glyphicon-star-empty",
                href: "report_style1.html"
            },
            {
                text: "Отчет 6",
                icon: "glyphicon glyphicon-user",
                href: "report_style1.html"
            },
        ]
    },
    {
        text: "Категория отчетов 2",
        nodes: [
            {
                text: "Отчет 1",
                icon: "glyphicon glyphicon-bed",
                href: "report_style1.html"
            },
            {
                text: "Отчет 2",
                icon: "glyphicon glyphicon-user",
                href: "report_style1.html"
            },
            {
                text: "Отчет 3",
                icon: "glyphicon glyphicon-star",
                href: "report_style1.html"
            },
            {
                text: "Отчет 4",
                icon: "glyphicon glyphicon-user",
                href: "report_style1.html"
            },
            {
                text: "Отчет 5",
                icon: "glyphicon glyphicon-star-empty",
                href: "report_style1.html"
            },
            {
                text: "Отчет 6",
                icon: "glyphicon glyphicon-user",
                href: "report_style1.html"
            },
        ]
    },
    {
        text: "Категория отчетов 3",
        nodes: [
            {
                text: "Отчет 1",
                icon: "glyphicon glyphicon-bed",
                href: "report_style1.html"
            },
            {
                text: "Отчет 2",
                icon: "glyphicon glyphicon-user",
                href: "report_style1.html"
            },
            {
                text: "Отчет 3",
                icon: "glyphicon glyphicon-star",
                href: "report_style1.html"
            },
            {
                text: "Отчет 4",
                icon: "glyphicon glyphicon-user",
                href: "report_style1.html"
            },
            {
                text: "Отчет 5",
                icon: "glyphicon glyphicon-star-empty",
                href: "report_style1.html"
            },
            {
                text: "Отчет 6",
                icon: "glyphicon glyphicon-user",
                href: "report_style1.html"
            },
        ]
    }    
];

$(document).ready(function () {
    $('#tree').treeview({
        data: List.tree,
        backColor: 'orange',
        levels: 1,
        enableLinks: true
    });
});