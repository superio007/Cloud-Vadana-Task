import java.util.Scanner;

public class RomanToInteger {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String romanNumeral = sc.nextLine();
        int result = romanToInt(romanNumeral.toUpperCase());
        System.out.println(romanNumeral + " : " + result);
    }

    public static int romanToInt(String s) {
        if (s == null) {
            return 0;
        }

        int length = s.length();
        int sum = 0;
        int pre = 0;

        for (int i = length - 1; i >= 0; i--) {
            int cur = romanTable(s.charAt(i));

            if (i == length - 1) {
                sum = sum + cur;
            } else {
                if (cur < pre) {
                    sum = sum - cur;
                } else {
                    sum = sum + cur;
                }
            }
            pre = cur;
        }

        return sum;
    }

    public static int romanTable(char c) {
        int num = 0;
        switch (c) {
            case 'I':
                num = 1;
                break;
            case 'V':
                num = 5;
                break;
            case 'X':
                num = 10;
                break;
            case 'L':
                num = 50;
                break;
            case 'C':
                num = 100;
                break;
            case 'D':
                num = 500;
                break;
            case 'M':
                num = 1000;
                break;
            default:
                num = 0;
                break;
        }
        return num;
    }
}
