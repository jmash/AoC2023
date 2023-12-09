using System.Diagnostics;
using AoC_2023_CSharp.Models;
using Serilog;
using Serilog.Events;

namespace AoC_2023_CSharp;

internal static class Program
{
    private static readonly ILogger Logger = LoggerSetup.ConfigureLogger()
            .MinimumLevel.Information()
            .CreateLogger();

    private static List<DataLine> _dataLines;

    // private static DataLine[] _dataLinesArray;

    public static void Main()
    {
        Logger.Information("Starting!");
        
        var rawLines = RawData.ActualData01
            .Split(Environment.NewLine);

        var answerTotal = 0;
        
        var commandLine = rawLines[0];

        var translatedCommandLine = new List<int>();

        foreach (var character in commandLine)
        {
            if (character == 'R') translatedCommandLine.Add(1);
            if (character == 'L') translatedCommandLine.Add(0);
        }

        var commandsArray = translatedCommandLine.ToArray();
        
        _dataLines = new List<DataLine>();
        
        for (var i = 2; i < rawLines.Length; i++)
        {
            var line = rawLines[i];
            _dataLines.Add(new DataLine(line, Logger));

        }

        var currentHeader = "AAA";

        while (currentHeader != "ZZZ")
        {
            
            for (var i = 0; i < commandsArray.Length; i++)
            {
                answerTotal += 1;

                var commandInt = commandsArray[i];
                currentHeader = FindNextHeader(currentHeader, commandInt);

            }
        }

        Logger.Information("Answer: {AnswerTotal}", answerTotal);
    }

    private static string FindNextHeader(string currentHeader, int commandInt)
    {
        
        var matchingDataLine = _dataLines.FirstOrDefault(x => x.Header == currentHeader);
        Logger.Debug("Current Header: {CurrentHeader}, Matching Data Line: {@MatchingDataLine}", currentHeader, matchingDataLine!);

        return matchingDataLine.Values[commandInt];

    }
}
