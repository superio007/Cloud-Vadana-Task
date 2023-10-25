public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy do";
        String isPangram = isPangram(input);
        if(isPangram == "true"){
            System.out.println("It is a pangram");
        }else{
            System.out.println("It is not a pangram");
        }
    }

    public static String isPangram(String s) {
        s = s.toLowerCase();
        boolean[] mark = new boolean[26];
        int index;
        for (int i = 0; i < s.length(); i++) {
            if ('a' <= s.charAt(i) && s.charAt(i) <= 'z') {
                index = s.charAt(i) - 'a';
                mark[index] = true;
            }
        }
        for (int i = 0; i < 26; i++) {
            if (!mark[i]) {
                return "false";
            }
        }
        return "true";
    }
}
