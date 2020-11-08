<?php

/*
 * This file is part of cxsquared/better-comment-share.
 *
 * Copyright (c) 2020 cxsquared.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Cxsquared\BetterCommentShare;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    new Extend\Locales(__DIR__ . '/resources/locale')
];
