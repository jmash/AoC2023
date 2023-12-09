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

    private static DataLine[] _dataLines;

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
        
        var dataLines = new List<DataLine>();
        
        var currentHeaders = new List<string>();
        
        for (var i = 2; i < rawLines.Length; i++)
        {
            
            var line = rawLines[i];

            var currentDataLine = new DataLine(line, Logger);
            
            dataLines.Add(currentDataLine);

            if (currentDataLine.Header.EndsWith("A"))
                currentHeaders.Add(currentDataLine.Header);
                
        }

        _dataLines = dataLines.ToArray();
        
        while (!allEndWithZ(currentHeaders))
        {

            for (var i = 0; i < commandsArray.Length; i++)
            {
                answerTotal += 1;
                
                Logger.Debug("About to apply command: {CommandsArray}", commandsArray[i]);

                for (int j = 0; j < currentHeaders.Count; j++)
                {

                    var commandInt = commandsArray[i];
                    currentHeaders[j] = FindNextHeader(currentHeaders[j], commandInt);

                }
                
            }
            
        }

        Logger.Information("Answer: {AnswerTotal}", answerTotal);
    }

    private static bool allEndWithZ(List<string> currentHeaders)
    {

        var allEndWithZ = true;
        
        foreach (var header in currentHeaders)
        {
            if (!header.EndsWith("Z"))
                allEndWithZ = false;
        }

        return allEndWithZ;
    }

    private static string FindNextHeader(string currentHeader, int commandInt)
    {
        for (int i = 0; i < _dataLines.Length; i++)
        {
            var queryLine = _dataLines[i];

            for (var j = 0; j < queryLine.Header.Length; j++)
            {
                if (currentHeader[j] != queryLine.Header[j]) break;
                if (j == 2)
                {
                    Logger.Debug("Current Header: {CurrentHeader} Matching header found at line: {I}", currentHeader, i);
                    return queryLine.Values[commandInt];
                }
            }
        }

        throw new Exception("YA DUN FUCKED UP: could not find matching header");
    }
}
