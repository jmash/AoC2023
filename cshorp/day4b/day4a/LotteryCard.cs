namespace day4b;

public class LotteryCard
{
    public LotteryCard(string rawLine, List<LotteryCard> uniqueCards)
    {
        _uniqueCards = uniqueCards;
        var splitByColon = rawLine.Split(":");

        Id = splitByColon[0].Split()[1];

        WinningNumbers = ParseNumberGroup(rawLine, 0);
        
        OurNumbers = ParseNumberGroup(rawLine, 1);

        InstanceNextChildCards();
    }


    public string Id { get; }

    public string[] OurNumbers { get; }

    public string[] WinningNumbers { get; }

    public static int CardCount { get; private set; } = 0;

    public List<LotteryCard> ChildCards { get; } = new List<LotteryCard>();

    private static List<LotteryCard> _uniqueCards = new List<LotteryCard>();

    private void InstanceNextChildCards()
    {
        
    }

    private string[] ParseNumberGroup(string rawLine, int groupIndex)
    {
        var splitByColon = rawLine.Split(":");
        
        var numbersRaw = splitByColon[1].Split("|")[groupIndex];
        
        var numbersRawArray = numbersRaw.Split();

        return numbersRawArray.Where(n => !string.IsNullOrWhiteSpace(n)).ToArray();
    }
}