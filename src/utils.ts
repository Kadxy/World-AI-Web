import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

// 注册插件
dayjs.extend(relativeTime);
// 设置语言为中文
dayjs.locale("zh-cn");

/**
 * 获取错误信息
 * @param error 错误
 * @param prefix 错误前缀
 * @param fallback 错误默认值
 * @returns 错误信息
 * @example getErrorMsg(null) // '未知错误'
 * @example getErrorMsg(new Error('错误信息')) // '错误: 错误信息'
 * @example getErrorMsg(new Error('用户名或密码错误'), '登录失败') // '登录失败: 用户名或密码错误'
 */
export const getErrorMsg = (error: unknown, prefix: string = '', fallback: string = '未知错误') => {
    console.debug(prefix, 'error', error);

    if (error instanceof Error) {
        if (prefix) {
            return `${prefix}: ${error.message}`;
        }
        return error.message;
    }
    return fallback;
};

/**
 * 获取日期格式化字符串
 * @param date 日期
 * @param format 格式化字符串
 * @param fallback 格式化失败默认值
 * @returns 日期格式化字符串
 */
export const getDayjsFormat = (
    date: string | number | Date | undefined | null,
    format: string = 'YYYY-MM-DD',
    fallback: string = '-'
) => {
    if (!date) {
        return fallback;
    }

    const dateObj = dayjs(date);
    if (!dateObj.isValid()) {
        return fallback;
    }
    
    const result = dateObj.format(format);
    if (result === 'Invalid Date') {
        return fallback;
    }
    return result;
};

/**
 * 格式化相对时间
 * @param date 日期
 * @param fallback 格式化失败默认值
 * @returns 相对时间或格式化后的日期
 */
export const formatRelativeTime = (
    date: string | number | Date | undefined | null,
    fallback: string = '-'
) => {
    if (!date) {
        return fallback;
    }

    const dateObj = dayjs(date);
    if (!dateObj.isValid()) {
        return fallback;
    }

    // 如果日期在未来，返回 fallback
    if (dateObj.isAfter(dayjs())) {
        return fallback;
    }

    const diff = dayjs().diff(dateObj, "day");
    
    // 如果时间差小于7天，使用相对时间，否则显示具体日期
    if (diff < 7) {
        return dateObj.fromNow();
    } else {
        return dateObj.format('YYYY-MM-DD HH:mm');
    }
};

// 为了向后兼容，保留旧函数名称但调用新函数
export const getDayjsEasyRead = formatRelativeTime;