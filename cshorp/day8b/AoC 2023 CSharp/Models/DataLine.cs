using AoC_2023_CSharp.Utilities;
using Serilog;

namespace AoC_2023_CSharp.Models;

public class DataLine
{
    private readonly ILogger _logger;

    public DataLine(string rawLine, ILogger logger = null)
    {
        _logger = logger;
        Header = rawLine.GetLineHeader<string>("=");

        LeftValue = GetLeftValue(rawLine);
        RightValue = GetRightValue(rawLine);
        
        logger?.Debug("rawline: {RawLine} header: {Header}", rawLine, Header);
    }

    private string GetLeftValue(string rawLine)
    {
        var values = rawLine.Split("=")[1];
        var leftValueRaw = values.Split(",")[0];
        var leftValue = leftValueRaw.Replace("(", String.Empty).Trim();
        _logger?.Debug("leftValue: {LeftValue}", leftValue);
        return leftValue;
    }
    
    private string GetRightValue(string rawLine)
    {
        var values = rawLine.Split("=")[1];
        var rightValueRaw = values.Split(",")[1];
        var rightValue = rightValueRaw.Replace(")", String.Empty).Trim();
        _logger?.Debug("rightValue: {RightValue}", rightValue);
        return rightValue;
    }

    public string Header { get; }

    public string[] Values => new[] { LeftValue, RightValue }; 
    
    private string LeftValue { get; }
    
    private string RightValue { get; }
}